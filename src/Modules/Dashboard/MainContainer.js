import React, { Component } from 'react';
import '../../Assets/scss/main.scss';
import ReactSpritz from './ReactSpritz';
import './ReactSpritz.scss';


const MainContainer = () =>  {

    const [inputText, setInputText] = React.useState('Howdy!');
    const [wpmInput, setWpm] = React.useState(80);
    const [playStatus, setPlayStatus] = React.useState(false);


    const textInputFunction=(e)=>{
        setInputText(e.target.value)
    }

    const playStatusFunction=(e)=>{
        if(playStatus===false){
            setPlayStatus(true)
            console.log(playStatus)
        }else if(playStatus===true) {
            setPlayStatus(false)
            console.log(playStatus)
        }
    }
    const decrementFunction=(e)=> {
        e.preventDefault();
        if (wpmInput) {
            setWpm(wpmInput - 5)
        }
    };

    const incrementFunction=(e)=> {
        e.preventDefault();

        if (wpmInput<300) {
            setWpm(wpmInput + 5)
        }
    };


        return (
            <div>
                    <div className="main-wrapper">
                        <div className="container pt-100 pb-100 register-confirmation">
                            <div className="form-fields">
                        <section>

                                <ReactSpritz
                                    text={inputText}
                                    wpm={wpmInput}
                                    playing={playStatus}
                                    normalized/>

                                {/*<textarea id="text_input" name="text_input" onChange={textInputFunction}/>*/}

                            <div className="box">
                                <textarea name="comment" id="comment" placeholder="Paste some text" onChange={textInputFunction} ></textarea>
                            </div>


                            {playStatus && (
                                    <div className="button-wrap mt-4">
                                    <button className="btn custom-button"  onClick={playStatusFunction} >Stop Me!</button>
                                </div>)}

                                {!playStatus && (
                                    <div className="button-wrap mt-4">
                                    <button className="btn custom-button"  onClick={playStatusFunction} >Start Me!</button>
                                </div>)}

                                <div className="d-flex align-items-center pt-2 pb-2">
                                    <div className="member-age">WPM</div>
                                    <div className="button-wrap d-flex flex-grow-1">
                                        <button onClick={decrementFunction} name="count_adult_inc" className="rounded-button"><span>-</span></button>
                                        <input type="text" name="adult_count_input" className="number member-count" value={wpmInput} ></input>
                                        <button onClick={incrementFunction} name="count_adult_dec" className="rounded-button"><span>+</span></button>
                                    </div>
                                </div>
                        </section>
                    </div>
                    </div>
                    </div>
             </div>
        );

}

export default MainContainer;