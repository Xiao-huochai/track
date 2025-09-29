import DisplayScreen from "../DisplayScreen/DsplayScreen.jsx";

const TrueScreen = ({ displayContent, forceActive }) => {
  return (
    <DisplayScreen
      wrapperId="DisplayScreen"
      content={displayContent}
      forceActive={forceActive}
    />
  );
};

export default TrueScreen;
