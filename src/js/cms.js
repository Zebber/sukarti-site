import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import StagePreview from "./cms-preview-templates/stage";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/sukarti.css");
CMS.registerPreviewStyle("/css/sponsor.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewStyle("stage", StagePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerWidget("color", ColorControl);
