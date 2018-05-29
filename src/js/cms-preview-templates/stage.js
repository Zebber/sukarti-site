import React from "react";

export default class StagePreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;
    return <div>
            <div className="bg-grey-1 pv4">
                <div className="flex-l mhn1-l ph3 center mw7">
                    <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "title"])}</h2>
                </div>
            </div>
            <div className="bg-grey-1 pv4">
                <div className="ph3 mw7 center">
                </div>
            </div>
            <div className="cms mw6">
                {widgetFor("body")}
            </div>
        </div>;
  }
}
