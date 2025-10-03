'use client';

import {FC, useCallback, useMemo, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import {Box, IconButton, Typography} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';

export const ImageUpload: FC<ImageUploadProps> = ({
                                                      files,
                                                      onChange,
                                                      maxSizeMB = 10,
                                                      maxFiles = 10,
                                                  }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange([...files, ...acceptedFiles]);
    }, [files, onChange]);

    const {getRootProps, getInputProps, isDragActive, fileRejections} = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.heic', '.heif'],
        },
        maxSize: maxSizeMB * 1024 * 1024,
        maxFiles,
        multiple: true,
    });

    const handleRemoveFile = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        onChange(newFiles);
    };

    // Generate stable preview URLs for each file and clean up when files change/unmount
    const previews = useMemo(() => files.map((file) => ({file, url: URL.createObjectURL(file)})), [files]);
    useEffect(() => {
        return () => {
            previews.forEach(p => URL.revokeObjectURL(p.url));
        };
    }, [previews]);

    return (
        <Box>
            <Box
                {...getRootProps()}
                sx={{
                    border: '2px dashed #51338B',
                    borderRadius: '16px',
                    p: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: isDragActive ? 'rgba(81, 51, 139, 0.04)' : 'transparent',
                    transition: 'background-color 0.2s',
                    '&:hover': {
                        backgroundColor: 'rgba(81, 51, 139, 0.04)',
                    },
                }}
            >
                <input {...getInputProps()} />
                <CloudUploadIcon sx={{fontSize: 48, color: '#51338B', mb: 1}}/>
                <Typography sx={{color: '#3C3C3C', fontSize: '16px', fontWeight: 600}}>
                    {isDragActive ? 'Pustite obrázky sem' : 'Kliknite alebo presuňte obrázky sem'}
                </Typography>
                <Typography sx={{color: '#666', fontSize: '14px', mt: 1}}>
                    Podporované formáty: JPG, PNG, GIF, WEBP, HEIC (max {maxSizeMB}MB)
                </Typography>
            </Box>

            {fileRejections.length > 0 && (
                <Box sx={{mt: 2}}>
                    {fileRejections.map(({file, errors}) => (
                        <Typography key={file.name} sx={{color: '#f44336', fontSize: '14px'}}>
                            {file.name}: {errors[0]?.message}
                        </Typography>
                    ))}
                </Box>
            )}

            {files.length > 0 && (
                <Box
                    sx={{
                        mt: 2,
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                    }}
                >
                    {previews.map(({file, url}, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                backgroundColor: '#f5f5f5',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #e0e0e0',
                            }}
                        >
                            <Box
                                component="img"
                                src={url}
                                alt={file.name}
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                }}
                            />
                            <IconButton
                                onClick={() => handleRemoveFile(index)}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    width: 32,
                                    height: 32,
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    },
                                }}
                            >
                                <Image
                                    src="/assets/icons/close.svg"
                                    alt="Remove"
                                    width={20}
                                    height={20}
                                    style={{filter: 'brightness(0) invert(1)'}}
                                />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

type ImageUploadProps = {
    files: File[];
    onChange: (files: File[]) => void;
    maxSizeMB?: number;
    maxFiles?: number;
};
