import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <>
      <div className="help-layout">
        <h2>Website help</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a
          corrupti quas laborum officia ipsum repellat sunt ducimus iusto maxime
          aliquam expedita, laboriosam perferendis, ipsam nihil tempora mollitia
          debitis illo?
        </p>

        <nav>
          <NavLink to="faq">FAQ</NavLink>
          <NavLink to="contact">Contact us</NavLink>
        </nav>

        <Outlet></Outlet>
      </div>
    </>
  );
}

export default HelpLayout;
