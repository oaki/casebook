import { emailTranslations } from './emails/translations';

export function getLoginEmailHtml(magicLinkUrl: string, language: 'sk' | 'en' = 'sk'): string {
    const t = emailTranslations[language];

    const emailBody = `
        <p style="font-family: Arial, sans-serif; font-size: 11px;"><span
            style="font-size: 14px;">${t.greeting}</span>
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"> </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"><span
            style="font-size: 14px;">${t.thankYou} <strong><span
            style="color: rgb(72, 17, 135);">${t.appName}</span></strong>, ${t.appDescription}</span>
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"> </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"><span
            style="font-size: 14px;">${t.instruction}</span>
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"> </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"><strong><span
            style="font-size: 14px;">🔗 <a href="${magicLinkUrl}" style="color: rgb(72, 17, 135); text-decoration: none;">${t.buttonText}</a></span></strong>
        </p>
        <p style="font-family: Arial, sans-serif; font-size: 11px;"><em><span
            style="font-size: 14px;">${t.linkNote}</span></em>
        </p>
    `;

    return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title></title><!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style type="text/css">#outlook a {
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }

    table, td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
    }

    img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }

    p {
        display: block;
        margin: 13px 0;
    }</style>
    <!--[if mso]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]--><!--[if lte mso 11]>
    <style type="text/css">
        .outlook-group-fix {
            width: 100% !important;
        }
    </style>
    <![endif]--><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style>
    <!--<![endif]-->
    <style type="text/css">@media only screen and (max-width: 480px) {
        .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
        }
    }</style>
    <style type="text/css">@media only screen and (max-width: 480px) {
        table.full-width-mobile {
            width: 100% !important;
        }

        td.full-width-mobile {
            width: auto !important;
        }
    }</style>
    <style type="text/css">.hide_on_mobile {
        display: none !important;
    }

    @media only screen and (min-width: 480px) {
        .hide_on_mobile {
            display: block !important;
        }
    }

    .hide_section_on_mobile {
        display: none !important;
    }

    @media only screen and (min-width: 480px) {
        .hide_section_on_mobile {
            display: table !important;
        }

        div.hide_section_on_mobile {
            display: block !important;
        }
    }

    .hide_on_desktop {
        display: block !important;
    }

    @media only screen and (min-width: 480px) {
        .hide_on_desktop {
            display: none !important;
        }
    }

    .hide_section_on_desktop {
        display: table !important;
        width: 100%;
    }

    @media only screen and (min-width: 480px) {
        .hide_section_on_desktop {
            display: none !important;
        }
    }

    p, h1, h2, h3 {
        margin: 0px;
    }

    ul, li, ol {
        font-size: 11px;
        font-family: Ubuntu, Helvetica, Arial;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @media only screen and (max-width: 480px) {
        .mj-column-per-100 {
            width: 100% !important;
            max-width: 100% !important;
        }

        .mj-column-per-100 > .mj-column-per-100 {
            width: 100% !important;
            max-width: 100% !important;
        }
    }

    .mj-column-per-100 [class^="mj-column-per-"] {
        line-height: normal;
    }

    .mj-button-full a {
        display: block !important;
    }</style>
</head>
<body style="background-color:#D0D0D0;">
<div style="background-color:#D0D0D0;"><!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
        <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
               style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-align:center;"><!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="" style="vertical-align:top;width:600px;"><![endif]-->
                    <div class="mj-column-per-100 outlook-group-fix"
                         style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                               style="vertical-align:top;" width="100%">
                            <tr>
                                <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                           style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                        <tr>
                                            <td style="width:600px;"><img height="auto"
                                                                          src="https://storage.googleapis.com/nutricia31756/Header-Image-Ecomail-I-Nutricia-Casebook.jpg"
                                                                          style="border:0;border-radius:0px 0px 0px 0px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                                                          width="600"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]--></td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]></td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
        <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
               style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
            <tbody>
            <tr>
                <td style="border:none;direction:ltr;font-size:0px;padding:5px 0px 5px 0px;text-align:center;">
                    <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="" style="vertical-align:top;width:600px;"><![endif]-->
                    <div class="mj-column-per-100 outlook-group-fix"
                         style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                               style="background-color:#FFFFFF;vertical-align:top;" width="100%">
                            <tr>
                                <td align="left"
                                    style="font-size:0px;padding:25px 35px 25px 35px;word-break:break-word;">
                                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;">
                                        ${emailBody}</div>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                           style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                        <tr>
                                            <td style="width:600px;"><img height="auto"
                                                                          src="https://storage.googleapis.com/nutricia31756/Nutricia-I-Casebook-1.png"
                                                                          style="border:0;border-radius:0px 0px 0px 0px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                                                          width="600"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="left"
                                    style="font-size:0px;padding:25px 35px 25px 35px;word-break:break-word;">
                                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;">
                                        <p style="font-family: Arial, sans-serif; font-size: 11px;"><span
                                                style="font-size: 14px;">${t.closing}</span>
                                        </p>
                                        <p style="font-family: Arial, sans-serif; font-size: 11px;"><br><span
                                                style="font-size: 14px;">${t.signature}</span></p></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]--></td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]></td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
        <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#bababa;background-color:#bababa;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
               style="background:#bababa;background-color:#bababa;width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;"><!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="" style="vertical-align:top;width:600px;"><![endif]-->
                    <div class="mj-column-per-100 outlook-group-fix"
                         style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                               style="vertical-align:top;" width="100%">
                            <tr>
                                <td align="left"
                                    style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                                    <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;">
                                        <p style="font-family: Arial, sans-serif; font-size: 11px; text-align: center;">
                                            <span style="font-size: 10px; font-family: Arial, sans-serif; color: #ffffff;"><a
                                                    style="color: #ffffff;" href="#"><span
                                                    style="text-decoration: underline;">${t.viewOnline}</span></a><br></span>
                                        </p></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]--></td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]--></div>
</body>
</html>`;
}
