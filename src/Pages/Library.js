import React from "react";
import "./library.css";
import InfoIcon from "@mui/icons-material/Info";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <div className="library">
      <div className="table-container">
        <div className="update-btn">
          <Link to="/upload">
            <button>Upload</button>
          </Link>
        </div>
        <div className="tables">
          <div className="table">
            <p>Upload Status of Materials</p>
            <table>
              <div className="table-row">
                <tr>
                  <td>1</td>
                  <td>Notes on X and Y Projections</td>
                  <td>Algebra - I</td>
                  <td>Notes</td>
                  <td>Hons</td>
                  <td>28</td>
                  <td>Bookmarked</td>
                  <td>Verified</td>
                  <td>Published</td>
                  <td>
                    Remarks <InfoIcon fontSize="small" />
                  </td>
                </tr>
              </div>
              <div className="table-row">
                <tr>
                  <td>2</td>
                  <td>Notes on Axis Plane</td>
                  <td>Algebra - I</td>
                  <td>Notes</td>
                  <td>Hons</td>
                  <td>17</td>
                  <td>Bookmarked</td>
                  <td>Unverified</td>
                  <td>UnPublished</td>
                  <td>
                    Remarks <InfoIcon fontSize="small" />
                  </td>
                </tr>
              </div>
            </table>
          </div>
          <div className="table">
            <p>My Materials</p>
            <table>
              <div className="table-row">
                <tr>
                  <td>1</td>
                  <td>Basics of Algebra</td>
                  <td>Algebra - I</td>
                  <td>Notes</td>
                  <td>Hons</td>
                  <td>28</td>
                  <td>Published</td>
                  <td>
                    Remarks <InfoIcon fontSize="small" />
                  </td>
                  <td>
                    View <ContentPasteSearchOutlinedIcon fontSize="small" />
                  </td>
                </tr>
              </div>
              <div className="table-row">
                <tr>
                  <td>1</td>
                  <td>Basics of Algebra</td>
                  <td>Algebra - I</td>
                  <td>Notes</td>
                  <td>Hons</td>
                  <td>28</td>
                  <td>Published</td>
                  <td>
                    Remarks <InfoIcon fontSize="small" />
                  </td>
                  <td>
                    View <ContentPasteSearchOutlinedIcon fontSize="small" />
                  </td>
                </tr>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
