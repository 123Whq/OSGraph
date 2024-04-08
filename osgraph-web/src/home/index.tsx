/** @jsxImportSource @emotion/react */
import styles from "./index.module.less";
import { ProjectSearch } from "../components";
import { useEffect, useState } from "react";

export default () => {
  const [needFixed, setNeedFixed] = useState<boolean>(false);
  const [templateType, setTemplateType] = useState<string>("REPO_CONTRIBUTE");

  const switchType = (value: number) => {
    if (value >= 980 && value <= 1580) {
      return "REPO_CONTRIBUTE";
    }
    if (value >= 1580 && value <= 2260) {
      return "REPO_ECOLOGY";
    }
    if (value >= 2260 && value <= 2940) {
      return "REPO_COMMUNITY";
    }
    if (value >= 2940 && value <= 3620) {
      return "ACCT_ACTIVITY";
    }
    if (value >= 3620 && value <= 4300) {
      return "ACCT_PARTNER";
    }
    if (value >= 4300 && value <= 4980) {
      return "ACCT_INTEREST";
    }
    return "REPO_CONTRIBUTE";
  };
  useEffect(() => {
    window.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;
      setTemplateType(switchType(scrollTop));
      if (scrollTop >= 600 && scrollTop <= 4300 && !needFixed) {
        setNeedFixed(true);
      } else if (scrollTop <= 600 || scrollTop >= 4300) {
        setNeedFixed(false);
      }
    };
  }, []);

  return (
    <div className={styles["home"]}>
      <img
        className={styles["logo"]}
        src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*YzqCQbdW7nUAAAAAAAAAAAAADu3UAQ/original"
        alt=""
      />
      <div className={styles["home-header"]}>
        <video
          src="https://mass-office.alipay.com/huamei_koqzbu/afts/file/FqCfRa9wOpwAAAAAAAAAABAADnV5AQBr"
          autoPlay
          loop
          muted
          className={styles["header-img"]}
        ></video>
        <div className={styles["open-source"]}>
          <img
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*-GbzRqZIBdwAAAAAAAAAAAAADu3UAQ/original"
            alt=""
            className={styles["title"]}
          />
          <ProjectSearch needFixed={needFixed} templateType={templateType} />
          <div className={styles["tuGraph-icon"]}>
            <p>Powered by</p>
            <img
              src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*fFhhRqgrUNIAAAAAAAAAAAAADu3UAQ/original"
              alt=""
              className={styles["tuGraph-img"]}
            />
            <a href="https://www.tugraph.org/" target="_blank">
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*4mhxQ6DQM2sAAAAAAAAAAAAADu3UAQ/original"
                alt=""
                className={styles["tuGraph-website"]}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["tuGraph-project"]}>
        <div className={styles["project-body"]}>
          <div className={styles["title-left"]}>
            <div className={styles["project-info"]}>
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kU6QRJfXtEQAAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
              <p className={styles["info-title"]}>项目贡献图谱</p>
            </div>
            <p className={styles["project-parse"]}>
              汇总项目在不同研发活动（Issue、PR、Commit、CR）下，贡献TopN的开发者。
            </p>
          </div>

          <img
            className={styles["tuGraphImg-right"]}
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*zT0VQLSlJbsAAAAAAAAAAAAADu3UAQ/original"
            alt=""
          />
        </div>
      </div>
      <div className={styles["tuGraph-project"]}>
        <div className={styles["project-body"]}>
          <img
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*lP8cRY59Be4AAAAAAAAAAAAADu3UAQ/original"
            alt=""
            className={styles["tuGraphImg-left"]}
          />

          <div className={styles["title-right"]} style={{ marginLeft: 60 }}>
            <div className={styles["project-info"]}>
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kU6QRJfXtEQAAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
              <p className={styles["info-title"]}>项目生态图谱</p>
            </div>
            <p className={styles["project-parse"]}>
              根据项目间相同开发者对应的行为（Issue、PR、Commit、CR），依赖关系等，构建关联生态项目的TopN。
            </p>
          </div>
        </div>
      </div>
      <div className={styles["tuGraph-project"]}>
        <div className={styles["project-body"]}>
          <div className={styles["title-left"]}>
            <div className={styles["project-info"]}>
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kU6QRJfXtEQAAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
              <p className={styles["info-title"]}>项目社区图谱</p>
            </div>
            <p className={styles["project-parse"]}>
              根据项目的开发者的组织、地域、关注等画像信息，汇总TopN活跃开发者。
            </p>
          </div>

          <img
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*xc48S731jj8AAAAAAAAAAAAADu3UAQ/original"
            alt=""
            className={styles["tuGraphImg-right"]}
          />
        </div>
      </div>
      <div className={styles["tuGraph-project"]}>
        <div className={styles["project-body"]}>
          <img
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*W5ogR4RO1ugAAAAAAAAAAAAADu3UAQ/original"
            alt=""
            className={styles["tuGraphImg-left"]}
          />

          <div className={styles["title-right"]} style={{ marginLeft: 60 }}>
            <div className={styles["project-info"]}>
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kU6QRJfXtEQAAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
              <p className={styles["info-title"]}>开发活动图谱</p>
            </div>
            <p className={styles["project-parse"]}>
              汇总项目在不同研发活动（Issue、PR、Commit、CR）下，贡献TopN的开发者。
            </p>
          </div>
        </div>
      </div>
      <div className={styles["tuGraph-project"]}>
        <div className={styles["project-body"]}>
          <div className={styles["title-left"]}>
            <div className={styles["project-info"]}>
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kU6QRJfXtEQAAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
              <p className={styles["info-title"]}>开源伙伴图谱</p>
            </div>
            <p className={styles["project-parse"]}>
              汇总和我开发活动强关联的TopN开发者。
            </p>
          </div>
          <img
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*2QAaRZlBAlYAAAAAAAAAAAAADu3UAQ/original"
            alt=""
            className={styles["tuGraphImg-right"]}
          />
        </div>
      </div>
      <div className={styles["tuGraph-project"]}>
        <div className={styles["project-body"]}>
          <img
            src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*iD6cRKC8RpkAAAAAAAAAAAAADu3UAQ/original"
            alt=""
            className={styles["tuGraphImg-left"]}
          />

          <div className={styles["title-right"]} style={{ marginLeft: 60 }}>
            <div className={styles["project-info"]}>
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kU6QRJfXtEQAAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
              <p className={styles["info-title"]}>开源兴趣图谱</p>
            </div>
            <p className={styles["project-parse"]}>
              根据开发者参与项目的主题、标签、语言等信息，汇总TopN开源领域特征（关联TopN项目）。
            </p>
          </div>
        </div>
      </div>
      <div className={styles["home-bottom"]}>
        <div className={styles["bottom-img"]}>
          <a href="https://www.tugraph.org/" target="_blank">
            <img
              src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*fFhhRqgrUNIAAAAAAAAAAAAADu3UAQ/original"
              alt=""
              className={styles["tuGraph-url"]}
            />
          </a>

          <div
            className={styles["bottom-link"]}
            onClick={() => {
              window.open("https://github.com/TuGraph-family/OSGraph");
            }}
          >
            <img
              src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*BnJ2TZbC8ckAAAAAAAAAAAAADu3UAQ/original"
              alt=""
            />
            <p>GitHub</p>
          </div>

          <div
            className={styles["bottom-link"]}
            onClick={() => {
              window.open("https://antv.antgroup.com/");
            }}
          >
            <img
              src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*kq9uSJJARtYAAAAAAAAAAAAADu3UAQ/original"
              alt=""
            />
            <p>AntV</p>
          </div>
        </div>
      </div>
    </div>
  );
};
