'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';
import { pizzaImg } from '@/assets/pizza.jpg';
export default function ImagePicker({ label, name }) {
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState();
    function handlePickClick() {
        imageInput.current.click();
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        // 한 가지 파일만 미리보기 하기 위한
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                {/* input은 보여지지는 않지만 버튼을 누름으로써 실행됩니다. */}
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
