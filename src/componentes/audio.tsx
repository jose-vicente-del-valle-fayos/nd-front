import React, { useRef, useState } from "react";

const Audio = ({ src }: any) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const cambiaPlayStop = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const manejaFin = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
    };
    return (
        <div>
            <audio ref={audioRef} src={src} onEnded={manejaFin}/>
            <button className={"audio"} title={"Reproducir audio"} onClick={cambiaPlayStop}> {isPlaying ?
                <i className={"mdi mdi-audio"}>stop</i> :
                <i className={"mdi mdi-audio"}>play_arrow</i> }
            </button>
        </div>
    );
};

export default Audio;