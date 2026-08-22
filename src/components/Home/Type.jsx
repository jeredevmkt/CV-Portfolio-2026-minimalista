import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [
          t("type.1"),
          "Freelancer",
          t("type.2"),
          t("type.3"),
          t("type.4"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
