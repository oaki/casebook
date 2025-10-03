"use client";

import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

// Individual Teaser Card (Frosted Glass Effect)
const TeaserCardContainer = styled(Paper)(({theme}) => ({
    backgroundColor: "rgba(30, 16, 60, 0.7)", // Dark purple with transparency
    backdropFilter: "blur(10px)", // Frosted glass effect
    border: "1px solid rgba(138, 43, 226, 0.5)", // Semi-transparent purple border
    borderRadius: theme.shape.borderRadius, // Inherit theme's border radius
    padding: theme.spacing(3), // Inner spacing
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align icon and text to the left
    justifyContent: "center",
    color: "#fff", // White text color
    minHeight: 120, // Ensure consistent height for cards
    cursor: "pointer", // Indicates interactivity
    transition: "all 0.3s ease", // Smooth transition for hover effects
    "&:hover": {
        borderColor: "rgba(138, 43, 226, 0.8)", // Slightly brighter border on hover
        boxShadow: "0 0 25px rgba(138, 43, 226, 0.4)", // Enhanced shadow on hover
        transform: "translateY(-5px)", // Subtle lift effect on hover
    },
    [theme.breakpoints.down("sm")]: {
        minHeight: 100, // Slightly smaller height on small mobile screens
        padding: theme.spacing(2), // Less padding on small mobile screens
    },
}));

const TeaserIconWrapper = styled(Box)(({theme}) => ({
    backgroundColor: "rgba(138, 43, 226, 0.2)", // Icon background circle color
    borderRadius: "50%", // Makes it a perfect circle
    padding: theme.spacing(1.5), // Padding inside the circle
    marginBottom: theme.spacing(1.5), // Space below the icon
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
        fontSize: "2rem", // Size of the icon
        color: "#8A2BE2", // Bright purple icon color
    },
}));

interface TeaserCardProps {
    icon: React.ElementType; // React component for the icon (e.g., RestaurantIcon)
    title: string; // The title/label for the card
    onClick?: () => void; // Optional click handler for interactivity
}

const TeaserCard: React.FC<TeaserCardProps> = ({icon: Icon, title, onClick}) => {
    return (
        <TeaserCardContainer onClick={onClick}>
            <TeaserIconWrapper>
                <Icon/> {/* Render the passed icon component */}
            </TeaserIconWrapper>
            <Typography variant="h6" component="h3" sx={{fontWeight: 600}}>
                {title}
            </Typography>
        </TeaserCardContainer>
    );
};

export default TeaserCard;
