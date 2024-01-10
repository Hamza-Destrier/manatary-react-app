"use client";
import React from "react";
import PageLayout from "@/components/Elements/PageLayout";
import styles from "@/styles/work.module.scss";
import Hero from "./sub/Hero";
import Intro from "./sub/Intro";
import Details from "./sub/Details";
import HorizontalLine from "@/components/Elements/HorizontalLine";
import ShowCase from "./sub/ShowCase";
import Image from "next/image";
import blurImg from "../../../../public/assets/common/blur-img.png";
import { useRouter, useParams } from "next/navigation";
import ALL_WORKS from "../workData";

const WorkDetailPage = () => {
  const _params = useParams();
  const _router = useRouter();

  const redirectToAllWorksPage = () => {
    _router.push("/work/");
  };
  const workRes = React.useMemo(() => {
    return ALL_WORKS.find(({ id }) => id === Number(_params.workId));
  }, [_params.workId, ALL_WORKS]);

  if (!workRes) {
    redirectToAllWorksPage();
    return <div>Invalid Blog. You are being redirected to blogs page!</div>;
  }

  const { title, intro, details, showcase } = workRes;

  return (
    <PageLayout className={styles["project-details-page-wrapper"]}>
      <div className={styles["project-details-page"]}>
        <Hero title={title} />
        <HorizontalLine />
        <Intro intro={intro} />
        <HorizontalLine />
        <Details details={details} />
        <ShowCase showcase={showcase} />
      </div>
      {/* blur imgs */}
      {[1, 2, 3].map((n) => {
        return (
          <Image
            key={n}
            className={`${styles["blur-img"]} ${styles[`blur-img--${n}`]}`}
            src={blurImg}
            alt=""
          />
        );
      })}
      {/* /blur imgs */}
    </PageLayout>
  );
};

export default WorkDetailPage;
