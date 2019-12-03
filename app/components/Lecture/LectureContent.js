import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Edit, Delete, Reorder, Image, OpenInNew, CloudDownload } from '@material-ui/icons';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  wrap: {
    width: '100%',
    display: 'flex',
    padding: 24,
    background: '#fff',
    alignItems: 'center',
    marginBottom: 8,
  },
  editIcon: {
    marginRight: 16,
    color: 'teal',
    cursor: 'pointer'
  },
  deleteIcon: {
    marginRight: 16,
    color: 'darkred',
    cursor: 'pointer'
  },
  newIcon: {
    marginRight: 8,
    color: 'orange',
    cursor: 'pointer'
  },
  icon: {
    marginRight: 16,
    color: '#aaa',
    cursor: 'pointer'
  },
  content: {
    flex: 1
  },
  url: {
    color: 'teal',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  type: {
    display: 'flex',
    alignItems: 'center',
    width: '25%'
  }
});

function LectureContent(props) {
  const classes = useStyles();
  const { onEdit, onDelete, data } = props;

  return (
    <Paper className={classes.wrap}>
      <div className={classes.type}>
        {data.type === 'text' ?
          [<Reorder className={classes.icon} />, 'Text']
          : [<Image className={classes.icon} />, 'Image']
        }
      </div>
      <div className={classes.content}>
        {data.type === 'text' ?
          data.content
          : <a target="_blank" href={data.url} className={classes.url}><OpenInNew className={classes.newIcon} /> {data.url}</a>
        }
      </div>
      {data.type === 'text' ?
        <Edit className={classes.editIcon} onClick={onEdit} />
        : <CloudDownload className={classes.icon} />
      }
      <Delete className={classes.deleteIcon} onClick={onDelete} />
    </Paper>
  );
}

LectureContent.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onCheck: PropTypes.func
};

export default LectureContent;