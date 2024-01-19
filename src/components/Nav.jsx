import { Link } from "react-router-dom";



const NavB = () => {
    return (
        <div>
        <div className="" >
            <nav class="navbar navbar-expand-lg navbar-light bg-light"  >
                <div class="container-fluid">
                    <div><Link style={{textDecoration:"none" , color:"black" }} to="/home">&#127968;Home</Link></div>
                    <div><Link style={{textDecoration:"none" , color:"black" }} id="space" to="/SecondPage">&#128209;Assignment</Link></div>
                    <div><Link style={{textDecoration:"none" , color:"black" }} id="space" to="/homework">&#128218;Homework</Link></div>
                    <div><Link style={{textDecoration:"none" , color:"black" }} id="space" to="/payfee">&#128176;Pay Fee</Link></div>
                </div>
            </nav>

        </div>
        </div>
    );
}

export default NavB;