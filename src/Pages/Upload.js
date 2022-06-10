import { Button } from "@mui/material";
import React from "react";
import "./upload.css";

const Upload = () => {
  return (
    <div className="upload">
      <form className="upload-input">
        <div className="inputs">
          <div className="input-components">
            <h4>Select Paper Category</h4>
            <div className="paper-btns">
              <Button>Stream</Button>
              <Button>Subject</Button>
              <Button>Paper</Button>
            </div>
          </div>
          <div className="input-components">
            <h4>Name of Material</h4>
            <input
              className="materialname height-full width-full"
              type="text"
            />
          </div>
          <div className="input-components">
            <h4>Type of Material</h4>
            <div className="material radioclass">
              <div className="radio-block">
                <input type="radio" id="choice1" name="material" />
                <label htmlFor="contactChoice1">Notes</label>
              </div>
              <div className="radio-block">
                <input type="radio" id="choice2" name="material" />
                <label htmlFor="contactChoice2">Previous Year Question</label>
              </div>
              <div className="radio-block">
                <input type="radio" id="choice3" name="material" />
                <label htmlFor="contactChoice3">
                  Previous Year Question - Solution
                </label>
              </div>
              <div className="radio-block">
                <input type="radio" id="choice4" name="material" />
                <label htmlFor="choice3">Practicals</label>
              </div>
            </div>
          </div>
          <div className="input-components">
            <h4>Select Type of Material</h4>
            <div className="materialtype radioclass">
              <div className="radio-block">
                <input type="radio" id="choice1" name="materialtype" />
                <label htmlFor="Choice1">Hons</label>
              </div>
              <div className="radio-block">
                <input type="radio" id="choice2" name="materialtype" />
                <label htmlFor="Choice2">DSC</label>
              </div>
              <div className="radio-block">
                <input type="radio" id="choice3" name="materialtype" />
                <label htmlFor="choice3">Pass</label>
              </div>
              <div className="radio-block">
                <input type="radio" id="choice4" name="materialtype" />
                <label htmlFor="choice4">Elec</label>
              </div>
            </div>
          </div>
          <div className="input-components">
            <h4>Select Semester</h4>
            <input className="height-full" type="text" />
          </div>
          <div className="input-components">
            <h4>Select College</h4>
            <input className="height-full" type="text" />
          </div>
          <div className="input-components">
            <h4>Tags</h4>
            <textarea className="tags width-full" />
          </div>
        </div>
        <div className="upload-btn">
          <Button>Upload</Button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
