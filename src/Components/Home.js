import Header from "./Header";

function Home(props) {
    return (  
        <div>
                <Header totalItems = {props.totalItems2}/>
        <div className="homeContainer">
        <header className="title">
            Welcome to the Groovy Bean Clothing Store
        </header>

        <div className="homeCardContainer">

        </div>
            
        </div>
        </div>
    );
}

export default Home;