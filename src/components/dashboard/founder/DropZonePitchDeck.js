import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '../../button/FormButton';

export default class DropzonePitchDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
    };
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <div>
        <Button
          align="center"
          variant="filled"
          label="Add Image"
          id="pitchDeck"
          defaultValue=""
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          onClick={this.handleOpen.bind(this)}
        >
          Add PitchDeck Images
        </Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
