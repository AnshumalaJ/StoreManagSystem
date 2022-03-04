import React,{Component} from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <table className="table">
          <tr><td>Follow us on:</td></tr>
          <tr><td><InstagramIcon/><FacebookIcon/><TwitterIcon/><LinkedInIcon/></td></tr>
          <tr><td className="para"></td></tr>
        </table>
      </div>
    </div>
  );
}
export default Footer;