import logo from './beautiful-strawberry-cake.jpg'
import './card.css'
let Card = () => {
    return (
        <>
            <div className="div my-4">
                <div>
                    <img src={logo} alt="Strawberry-Cake" />
                </div>
                <div className="bg-light">
                    <h2 className="my-3">Strawberry Cake</h2>
                    <div className="text-muted ">
                        <div >Three layer strawberry dessert is not only beautiful, but also delicious!</div>
                        <div>Perfect dessert for spring and summer.</div>

                    </div>
                </div>
                <div className="info text-muted my-4">
                    <p>346 Cal</p>
                    <p>P/F/C : 6/14/49</p>
                    <p>13.9 <sup>o</sup>C</p>
                </div>
                <div className="info">
                    <h2 className="text">$13.90 <span className="text-danger h3 ml-3 "><del>$18.90</del></span></h2>
                    <button className="btn btn-success text-uppercase px-4 ">Order</button>
                </div>
            </div >

        </>
    );
};
export { Card };
