'use client';
import React, { useState } from 'react';
import { Box, Dialog, IconButton, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

interface ImageGalleryProps {
    images: {
        id: number;
        file_path: string;
        token: string;
    }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpen = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            handlePrevious();
        } else if (e.key === 'ArrowRight') {
            handleNext();
        } else if (e.key === 'Escape') {
            handleClose();
        }
    };

    // Function to get the proper image URL
    const getImageUrl = (filePath: string, token: string) => {
        return `/api/files?path=${encodeURIComponent(filePath)}&token=${token}`;
    };

    return (
        <>
            {/* Thumbnail Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 2 }}>
                {images.map((image, index) => (
                    <Box
                        key={image.id}
                        onClick={() => handleOpen(index)}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: 2,
                            overflow: 'hidden',
                            backgroundColor: '#f5f5f5',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                boxShadow: 4,
                            },
                        }}
                    >
                        <Image
                            src={getImageUrl(image.file_path, image.token)}
                            alt={`Case attachment ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </Box>
                ))}
            </Box>

            {/* Lightbox Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
                fullScreen={isMobile}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            boxShadow: 'none',
                            margin: isMobile ? 0 : 2,
                            width: isMobile ? '100%' : 'calc(100% - 64px)',
                            height: isMobile ? '100%' : 'calc(100% - 64px)',
                        },
                    }
                }}
                onKeyDown={handleKeyDown}
            >
                {/* Close Button */}
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: 'white',
                        zIndex: 2,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Previous Button */}
                {images.length > 1 && (
                    <IconButton
                        onClick={handlePrevious}
                        sx={{
                            position: 'absolute',
                            left: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            zIndex: 2,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                )}

                {/* Next Button */}
                {images.length > 1 && (
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            zIndex: 2,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                )}

                {/* Main Image */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: isMobile ? 0 : 8,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            maxWidth: 1200,
                            maxHeight: 900,
                        }}
                    >
                        <Image
                            src={getImageUrl(images[currentIndex].file_path, images[currentIndex].token)}
                            alt={`Case attachment ${currentIndex + 1}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw, 1200px"
                            priority
                        />
                    </Box>
                </Box>

                {/* Image Counter */}
                {images.length > 1 && (
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: '8px 16px',
                            borderRadius: 1,
                            fontSize: '14px',
                        }}
                    >
                        {currentIndex + 1} / {images.length}
                    </Box>
                )}
            </Dialog>
        </>
    );
};

export default ImageGallery;
