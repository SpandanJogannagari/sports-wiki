import './sidebar.css'


const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div onClick={() => props.getOperation('Points Table')} className="sidebar-content">
        <p className="sidebar-text" id="points-table">Points Table</p>
      </div>
      <div onClick={() => props.getOperation('Top Scorers')} className="sidebar-content">
        <p className="sidebar-text" id="sidebar-scores">Top Scorers</p>
      </div>
      <div onClick={() => props.getOperation('Assists')} className="sidebar-content">
        <p className="sidebar-text" id="sidebar-assists">Assists</p>
      </div>
      <div onClick={() => props.getOperation('Yellow Cards')} className="sidebar-content">
        <p className="sidebar-text" id="sidebar-cleanssheets">Yellow Cards</p>
      </div>
      <div onClick={() => props.getOperation('Redcards')} className="sidebar-content">
        <p className="sidebar-text " id="sidebar-Redcards">Redcards</p>
      </div>
      <div onClick={() => props.getOperation('Player Profile')} className="sidebar-content">
        <p className="sidebar-text" id="sidebar-PlayerProfile">Player Profile</p>
      </div>
    </div>
  );
};

export default Sidebar;