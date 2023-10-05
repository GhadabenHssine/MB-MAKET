"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "../../../i18n/client";
import OurmethodsBase from "./OurmethodsBase";

// import { useRouter } from "next/navigation";

export const Ourmethods = ({ lng }) => {
    useEffect(() => { }, []);
    const { t } = useTranslation(lng, "ourmethodesbase");
    return <OurmethodsBase t={t} lng={lng} />;
};