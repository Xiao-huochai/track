import { useState } from "react";
import { faultData } from "../../data/faultScenes";
import SceneCard from "../../components/SceneCard";
import Modal from "../../components/Modal";
import "./Home.css";

const Home = () => {
  // 弹窗状态管理
  const [modalOpen, setModalOpen] = useState(false);
  const [currentScene, setCurrentScene] = useState(null);
  const [currentSectionTitle, setCurrentSectionTitle] = useState("");

  // 打开弹窗，传入场景数据
  const handleCardClick = (scene) => {
    // 查找场景所属的分类标题
    const section = faultData.find((section) =>
      section.scenes.some((s) => s.id === scene.id)
    );

    setCurrentScene(scene);
    setCurrentSectionTitle(section?.title || "");
    setModalOpen(true);
  };

  // 关闭弹窗
  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentScene(null);
    setCurrentSectionTitle("");
  };

  return (
    <div className="home-container">
      <h1>模拟列车故障场景处理教程</h1>

      <div className="sections-container">
        {faultData.map((section, index) => (
          <div key={index} className="fault-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="scenes-grid">
              {section.scenes.map((scene) => (
                <SceneCard
                  key={scene.id}
                  scene={scene}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 场景详情弹窗 */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        scene={currentScene}
        sectionTitle={currentSectionTitle}
      />
    </div>
  );
};

export default Home;
