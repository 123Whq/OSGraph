/** @jsxImportSource @emotion/react */
import type { Graph } from "@antv/g6";
import { Modal, Button, message } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { OSGraph } from "../controller";
import { GraphView } from "../components";
import { ProjectSearch } from "../components";
import { GRAPH_STYLE } from "./style";
import { useLocation } from "react-router-dom";
import { isEmpty } from "lodash";

export default () => {
  const location = useLocation();
  const { data, warehouseValue, projectValue, querySource, searchValue } =
    location.state || {};
  const [graphData, setGraphData] = React.useState(data || {});
  const { t } = useTranslation();
  const [open, setIsOpen] = React.useState(false);
  const [shareLink, setShareLink] = React.useState("");
  const graphRef = React.useRef<Graph>();

  const share = () => {
    setIsOpen(true);
    setShareLink("");
  };

  const copy = async () => {
    const type = "text/plain";
    const blob = new Blob([shareLink], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
    message.success(t`copy success`);
  };

  const download = async () => {
    if (!graphRef.current) return;
    const dataURL = await graphRef.current.toDataURL({
      type: "image/png",
      encoderOptions: 1,
    });
    let a: HTMLAnchorElement | null = document.createElement("a");
    a.href = dataURL;
    a.download = "test.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    a = null;
  };

  return (
    <OSGraph>
      <div className="graph-container" css={GRAPH_STYLE}>
        <div className="header">
          <div className="sel">
            <a href="/">
              <img
                src="https://mdn.alipayobjects.com/huamei_0bwegv/afts/img/A*9HFERrqAg58AAAAAAAAAAAAADu3UAQ/original"
                alt=""
              />
            </a>

            <ProjectSearch
              needFixed={false}
              defaultStyle={true}
              graphWarehouseValue={warehouseValue}
              graphProjectValue={projectValue}
              graphQuerySource={querySource}
              graphSearchValue={searchValue}
              onSearch={(searchData) => {
                if (!isEmpty(searchData)) {
                  setGraphData(searchData);
                }
              }}
            />
          </div>
          <div className="control">
            <button onClick={share}>{t`share`}</button>
            <button onClick={download}>{t`download`}</button>
          </div>
        </div>
        <div className="graph">
          <GraphView
            data={graphData}
            onReady={(graph) => (graphRef.current = graph)}
          />
        </div>
      </div>
      <Modal
        title={t`share`}
        open={open}
        footer={null}
        onCancel={() => {
          setIsOpen(false);
        }}
      >
        <div
          style={{
            background: "#f6f6f6",
            borderRadius: 8,
            width: 432,
            height: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ width: "calc(100% - 65px)" }}>{shareLink}</p>
          <Button
            type="primary"
            onClick={() => copy()}
            style={{ width: 65, height: 40 }}
          >{t`copy`}</Button>
        </div>
      </Modal>
    </OSGraph>
  );
};
