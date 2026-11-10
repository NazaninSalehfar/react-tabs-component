function TabContent({ title, content }) {
  return (
    <div className="tab-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default TabContent;