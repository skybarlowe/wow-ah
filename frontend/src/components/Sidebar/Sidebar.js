export default function Sidebar() {
  return (
    // <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush" id="myGroup">
        <a href="#weaponsSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning"> Weapons </a>
        <div className="collapse list-unstyled" id="weaponsSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#"> Swords </a>
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#"> Axes </a>
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#"> Staves </a>
        </div>
        <a href="#armorSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning"> Armor</a>
        <div className="collapse list-unstyled" id="armorSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Cloth</a>
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Leather</a>
        </div>
        <a href="#containersSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning">Containers</a>
        <div className="collapse list-unstyled" id="containersSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Cloth</a>
          <a className="list-group-item list-group-item-action bg-dark text-white"href="#">Leather</a>
        </div>
        <a href="#gemsSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning">Gems</a>
        <div className="collapse list-unstyled" id="gemsSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Cloth</a>
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Leather</a>
        </div>
        <a href="#itemEnhancementsSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning">Item Enhancements</a>
        <div className="collapse list-unstyled" id="itemEnhancementsSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Cloth</a>
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Leather</a>
        </div>
        <a href="#consumablesSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning">Consumables</a>
        <div className="collapse list-unstyled" id="consumablesSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#">Cloth</a>
          <a className="list-group-item list-group-item-action bg-dark text-white"href="#" >Leather</a>
        </div>
        <a href="#GlyphsSubmenu" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-warning">Glyphs</a>
        <div className="collapse list-unstyled" id="GlyphsSubmenu" data-parent="#myGroup">
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#"> Cloth</a>
          <a className="list-group-item list-group-item-action bg-dark text-white" href="#"> Leather</a>
        </div>
      </div>
    // </div>
  );
}