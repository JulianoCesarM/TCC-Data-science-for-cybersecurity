import { Link } from "react-router-dom"
import "./StylePage.css"
export default function HeaderPage() {
  return (
    <div className="header-page">
      <div className="components">
        <p>
          <Link to="/">HOME</Link>
        </p>
        <div className="contents">
          <p>
            <Link to="/cyber-security">Cibersegurança</Link>
          </p>
          <p>
            <Link to="/data-science">Ciências de dados</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
