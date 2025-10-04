import {NextResponse} from 'next/server';

import BodyPartsService from "@/app/libs/services/bodyPartsService";
import {getSession} from "@/lib/session";

export async function GET() {
    try {
        // Check authentication
        const session = await getSession();

        if (!session) {
            return NextResponse.json(
                {error: "Authentication required"},
                {status: 401}
            );
        }

        // Use service with dependency injection
        const bodyParts = await BodyPartsService.getAllBodyParts();

        return NextResponse.json(bodyParts);

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            {error: "Failed to fetch body parts"},
            {status: 500}
        );
    }
}
