import React from "react";
import Beast from "./Beast";
import Data from "./Data.json";

class Main extends React.Component {
    render() {
        return (
            <div>
                {
                    Data.map(element => {
                        return (<Beast title={element.title} image_url={element.image_url} description={element.description} />)
                    })
                }
            </div>
        )
    }
}
export default Main