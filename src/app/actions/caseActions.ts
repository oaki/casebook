"use server";

import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/session';
import path from 'path';
import fs from 'fs/promises';
import { nanoid } from 'nanoid';
import { prisma } from "@/app/libs/services/databaseConnection";
import { CaseFormData } from '@/state/caseFormAtoms';


// Constants
const UPLOADS_DIR = path.join(process.cwd(), 'uploads');

// Types for database operations
type CaseDatabaseInput = {
  userId: number;
  caseName: string;
  patientAgeMonths: string;
  gender: string;
  affectedSystems: string[];
  familyHistory: string;
  microbiomeFactors: string[];
  nutritionalHistory: string;
  clinicalSymptoms: string[];
  otherSymptoms: string;
  diagnosis: string;
  usedProduct: string;
  treatmentDescription: string;
};

type UserUpdateInput = {
  name?: string;
  specialization?: string;
  workplace?: string;
};

// Single Responsibility: File system operations
const fileOperations = {
  async ensureCaseDirectory(caseId: number): Promise<string> {
    const caseDir = path.join(UPLOADS_DIR, 'cases', String(caseId));
    await fs.mkdir(caseDir, { recursive: true });
    return caseDir;
  },

  async saveFile(file: File, caseDir: string, caseId: number): Promise<string> {
    const fileExtension = path.extname(file.name);
    const safeFilename = `${nanoid()}${fileExtension}`;

    // Convert File to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(path.join(caseDir, safeFilename), buffer);

    return `cases/${caseId}/${safeFilename}`;
  }
};

// Single Responsibility: Database operations
const caseRepository = {
  async createCase(data: CaseDatabaseInput) {
    return prisma.cases.create({
      data: {
        user_id: data.userId,
        case_name: data.caseName,
        patient_age_months: data.patientAgeMonths,
        gender: data.gender,
        affected_systems: data.affectedSystems,
        family_history: data.familyHistory,
        microbiome_factors: data.microbiomeFactors,
        nutritional_history: data.nutritionalHistory,
        clinical_symptoms: data.clinicalSymptoms,
        other_symptoms: data.otherSymptoms,
        diagnosis: data.diagnosis,
        used_product: data.usedProduct,
        treatment_description: data.treatmentDescription,
        is_active: true,
      },
    });
  },

  async createAttachment(caseId: number, filePath: string) {
    return prisma.case_attachments.create({
      data: {
        case_id: caseId,
        file_path: filePath,
      }
    });
  }
};

// Single Responsibility: User database operations
const userRepository = {
  async updateProfile(userId: number, data: UserUpdateInput) {
    return prisma.users.update({
      where: { id: userId },
      data,
    });
  }
};

// Single Responsibility: Data transformation
const dataMapper = {
  formDataToDatabaseInput(formData: CaseFormData, userId: number): CaseDatabaseInput {
    return {
      userId,
      caseName: formData.caseName,
      patientAgeMonths: formData.patientAgeMonths,
      gender: formData.gender,
      affectedSystems: formData.affectedSystems,
      familyHistory: formData.familyHistory,
      microbiomeFactors: formData.microbiomeFactors,
      nutritionalHistory: formData.nutritionalHistory,
      clinicalSymptoms: formData.clinicalSymptoms,
      otherSymptoms: formData.otherSymptoms,
      diagnosis: formData.diagnosis,
      usedProduct: formData.usedProduct,
      treatmentDescription: formData.treatmentDescription,
    };
  },

  filterNonEmptyUserData(userData: UserUpdateInput): UserUpdateInput {
    const updateData: UserUpdateInput = {};
    if (userData.name) updateData.name = userData.name;
    if (userData.specialization) updateData.specialization = userData.specialization;
    if (userData.workplace) updateData.workplace = userData.workplace;
    return updateData;
  }
};

// Main orchestration function
export async function saveCase(formData: CaseFormData) {
  const session = await getSession();
  if (!session?.user || !session.user.id) {
    return { success: false, error: 'Not authenticated' };
  }

  try {
    const userId = session.user.id;

    // Transform form data to database structure
    const caseData = dataMapper.formDataToDatabaseInput(formData, userId);

    // Create case record
    const newCase = await caseRepository.createCase(caseData);

    // Process attachments if they exist
    if (formData.attachments?.length > 0) {
      const caseDir = await fileOperations.ensureCaseDirectory(newCase.id);

      // Process files in parallel for better performance
      await Promise.all(
        formData.attachments.map(async (file) => {
          const filePath = await fileOperations.saveFile(file, caseDir, newCase.id);
          await caseRepository.createAttachment(newCase.id, filePath);
        })
      );
    }

    revalidatePath('/dashboard');
    return { success: true, caseId: newCase.id };
  } catch (error) {
    console.error('Error saving case:', error);
    return { success: false, error: 'Failed to save case' };
  }
}

export async function updateUserData(userData: UserUpdateInput) {
  const session = await getSession();
  if (!session?.user || !session.user.id) {
    return { success: false, error: 'Not authenticated' };
  }

  try {
    // Filter out empty values
    const updateData = dataMapper.filterNonEmptyUserData(userData);

    // Only update if there's data to update
    if (Object.keys(updateData).length > 0) {
      await userRepository.updateProfile(session.user.id, updateData);
    }

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error: 'Failed to update user profile' };
  }
}
