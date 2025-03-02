import './style.css'
import { auth } from './components/auth/auth'


const app = document.getElementById("app")
const authPage = new auth(app)
authPage.render(app)