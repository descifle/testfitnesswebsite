import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { websiteName } from "../util/constants";

type LavaLampProps = {
    navPaths: {
        path: string,
        name: string
    }[]
}

const LavaLampNav: React.FC<LavaLampProps> = ({ navPaths }) => {
    const [selectedNavItem, setSelectedNavItem] = useState(navPaths.map(ele => ele.path).indexOf(window.location.pathname.substring(1)));
    const [hoverNavItem, setHoverNavItem] = useState(0);
    const [navPositions, setNavPositions] = useState([]);

    useEffect(() => {
        const parent = document.querySelector(".lavalamp");
        let childrensItemWidth: any = [0]

        parent?.childNodes.forEach((e: any, i) => {
            if (e.className.includes("link-item")) {
                childrensItemWidth = [...childrensItemWidth, e.offsetWidth]
            }
        })

        setNavPositions(childrensItemWidth);
    }, [])

    useEffect(() => {
        // reset scroll position
        window.scrollTo({ top: 0 });

        if (window.location.pathname === "/") {
            setSelectedNavItem(0);
            setHoverNavItem(0);
        } else {
            setSelectedNavItem(navPaths.map(ele => ele.path).indexOf(window.location.pathname.substring(1)));
            setHoverNavItem(navPaths.map(ele => ele.path).indexOf(window.location.pathname.substring(1)));
        }
    }, [window.location.pathname])

    const handleNavChange = (itemSelected: number) => {
        if (itemSelected < 1) setSelectedNavItem(0);
        else if (itemSelected > navPositions.length) setSelectedNavItem(navPositions.length)
        else setSelectedNavItem(itemSelected);
    }

    const handleHoverChange = (itemSelected: number) => {
        if (itemSelected < 1) setHoverNavItem(0);
        else if (itemSelected > navPositions.length) setHoverNavItem(navPositions.length)
        else setHoverNavItem(itemSelected);
    }

    const navPXReducer = (prev: number, curr: number) => {
        return prev + curr;
    }

    return (
        <>
            <div style={{ flex: 1 }} className="logo-container flex-align-center">
                {websiteName}
            </div>
            <ul className="desktop-menu" onMouseLeave={() => setHoverNavItem(selectedNavItem)}>
                <div className="lavalamp">
                    {navPaths.map((navPath, i) => (
                        <li key={i} className="link-item"
                        onClick={() => handleNavChange(i)}
                        onMouseEnter={() => handleHoverChange(i)}
                        >
                            <NavLink
                                className="flex-center"
                                to={navPath.path}>
                                {navPath.name}
                            </NavLink>
                        </li>
                    ))}
                    <div
                        className="lamp-animation"
                        style={{ width: navPositions[selectedNavItem + 1], left: `calc(${navPositions.slice(0, selectedNavItem + 1).reduce(navPXReducer, 0)}px)` }}
                    ></div>
                    <div
                        className="lamp-animation-hover"
                        style={{ width: navPositions[hoverNavItem + 1], left: `calc(${navPositions.slice(0, hoverNavItem + 1).reduce(navPXReducer, 0)}px)` }}
                    ></div>
                </div>
            </ul>
            <div style={{ flex: 1 }}></div>
        </>

    )
}

export default LavaLampNav;