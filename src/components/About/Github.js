import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Github() {
  const { t } = useTranslation();
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1
        className="project-heading pb-4"
        style={{ paddingBottom: "20px" }}
        dangerouslySetInnerHTML={{ __html: t("github.days") }}
      ></h1>
      <GitHubCalendar
        username="jeredevmkt"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
