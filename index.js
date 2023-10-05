import { useTranslation } from "../../../i18n";

import { OurmethodsBase } from "./OurmethodsBase";

export const Ourmethods = async ({ lng }) => {
    const { t } = await useTranslation(lng, "ourmethodesbase");
    return <OurmethodsBase t={t} lng={lng} />;
};