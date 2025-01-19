import {MobileFrameWrapper} from "@/components/MobileFrameWrapper.tsx";
import {Route, Routes} from "react-router";

import './App.css'
import './shared/css/noDrag.css';
import './shared/css/hideScrollbar.css';
import {HomePage} from "@/pages/HomePage.tsx";
import {SearchPage} from "@/pages/SearchPage.tsx";
import {BoardPage} from "@/pages/BoardPage.tsx";
import {MyPage} from "@/pages/MyPage.tsx";
import {ShopPage} from "@/pages/ShopPage.tsx";


function App() {

    return (
        <MobileFrameWrapper>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path={'/search'} element={<SearchPage/>}/>
                <Route path={'/board'} element={<BoardPage/>}/>
                <Route path={'/my'} element={<MyPage/>}/>
                <Route path={'/shop'} element={<ShopPage/>}/>
            </Routes>
        </MobileFrameWrapper>
    )
}

export default App
