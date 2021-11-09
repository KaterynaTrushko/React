function Nav(props) {

  let date = props.nav;
  const listItem = date.map(item => <li key ={item.link} ><a href={date.link}>my link</a></li>)

  return (
    <nav>
      <ul className="main-navigation">
        {listItem}
      </ul>
    </nav>
  )
}

export default Nav