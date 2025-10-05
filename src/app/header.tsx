"use client";

import React, {FC, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {StyledAppBar} from "@/components/header/StyledAppBar";
import {HeaderLogo} from "@/components/header/HeaderLogo";
import {DesktopNav} from "@/components/header/DesktopNav";
import {MobileDrawer} from "@/components/header/MobileDrawer";
import {LanguageMenu} from "@/components/header/LanguageMenu";
import {useLanguageMenu} from "@/components/header/useLanguageMenu";
import {usePathname} from 'next/navigation';
import {DEFAULT_LOCALE, isSupportedLocale, Locale} from '@/lib/locales';
import {useTranslation} from 'react-i18next';

const Header: FC = () => {
    const {t} = useTranslation();
    const pathname = usePathname();
    const segments = pathname.split('/');
    const maybeLang = segments[1];
    const currentLang: Locale = isSupportedLocale(maybeLang) ? maybeLang : DEFAULT_LOCALE;

    const [mobileOpen, setMobileOpen] = useState(false);
    const {anchorEl, open, openMenu, closeMenu, selectLanguage} = useLanguageMenu();

    const toggleMobile = () => setMobileOpen(v => !v);

    return (
        <>
            <StyledAppBar elevation={0} position="sticky">
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <HeaderLogo/>
                    <IconButton
                        color="inherit"
                        aria-label="toggle navigation drawer"
                        edge="start"
                        onClick={toggleMobile}
                        sx={{mr: 2, display: {xs: 'flex', sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <DesktopNav
                        onOpenLanguage={openMenu}
                        currentLang={currentLang}
                        sx={{display: {xs: 'none', sm: 'flex'}}}
                        t={t}
                    />
                </Toolbar>
            </StyledAppBar>

            <nav>
                <MobileDrawer
                    open={mobileOpen}
                    onClose={toggleMobile}
                    onOpenLanguage={openMenu}
                    currentLang={currentLang}
                    t={t}
                />
            </nav>

            <LanguageMenu
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                onSelect={(lang) => {
                    closeMenu();
                    selectLanguage(lang);
                }}
            />
        </>
    );
};

export default Header;
