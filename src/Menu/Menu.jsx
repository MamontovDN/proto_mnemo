import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 900,
    },
});

export const Menu = (props) => {
    const classes = useStyles();
    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            multiSelect
        >
            <TreeItem nodeId="1" label={<span style={{fontSize:'1.5rem'}}>{'Оренбургская обл'}</span>}>
                <TreeItem nodeId="11" label={<span style={{fontSize:'1.5rem'}}>{'ГРС Оренбург 1'}</span>}>
                    <TreeItem nodeId="111" label={<span style={{fontSize:'1.5rem'}}>{'ГРП 1'}</span>}>
                        <TreeItem nodeId="1111" label={<span style={{fontSize:'1.5rem'}}>{'Оренбургская обл'}</span>}/>
                        <TreeItem nodeId="1112" label={<span style={{fontSize:'1.5rem'}}>{'Оренбургская обл'}</span>}/>
                    </TreeItem>
                    <TreeItem nodeId="112" label={<span style={{fontSize:'1.5rem'}}>{'ГРП 2'}</span>}>
                        <TreeItem nodeId="1121" label={<span style={{fontSize:'1.5rem'}}>{'КП'}</span>}/>
                        <TreeItem nodeId="1122" label={<span style={{fontSize:'1.5rem'}}>{'Данные'}</span>}/>
                    </TreeItem>
                    <TreeItem nodeId="113" label={<span style={{fontSize:'1.5rem'}}>{'ШП 34'}</span>}>
                        <TreeItem nodeId="1131" label={<span style={{fontSize:'1.5rem'}}>{'КП'}</span>}/>
                        <TreeItem nodeId="1132" label={<span style={{fontSize:'1.5rem'}}>{'Данные'}</span>}/>
                    </TreeItem>
                    <TreeItem nodeId="114" label={<span style={{fontSize:'1.5rem'}}>{'ШП 22'}</span>}>
                        <TreeItem nodeId="1141" label={<span style={{fontSize:'1.5rem'}}>{'КП'}</span>}/>
                        <TreeItem nodeId="1142" label={<span style={{fontSize:'1.5rem'}}>{'Данные'}</span>}/>
                    </TreeItem>
                </TreeItem>
                <TreeItem nodeId="12" label={<span style={{fontSize:'1.5rem'}}>{'ГРС каменноозерное'}</span>}>
                    <TreeItem nodeId="121" label={<span style={{fontSize:'1.5rem'}}>{'ГРП 1'}</span>}>
                        <TreeItem nodeId="1211" label={<span style={{fontSize:'1.5rem'}}>{'Оренбургская обл'}</span>}/>
                        <TreeItem nodeId="1212" label={<span style={{fontSize:'1.5rem'}}>{'Оренбургская обл'}</span>}/>
                    </TreeItem>
                    <TreeItem nodeId="122" label={<span style={{fontSize:'1.5rem'}}>{'ГРП 2'}</span>}>
                        <TreeItem nodeId="1221" label={<span style={{fontSize:'1.5rem'}}>{'КП'}</span>}/>
                        <TreeItem nodeId="1222" label={<span style={{fontSize:'1.5rem'}}>{'Данные'}</span>}/>
                    </TreeItem>
                    <TreeItem nodeId="123" label={<span style={{fontSize:'1.5rem'}}>{'ШП 34'}</span>}>
                        <TreeItem nodeId="1231" label={<span style={{fontSize:'1.5rem'}}>{'КП'}</span>}/>
                        <TreeItem nodeId="1232" label={<span style={{fontSize:'1.5rem'}}>{'Данные'}</span>}/>
                    </TreeItem>
                    <TreeItem nodeId="124" label={<span style={{fontSize:'1.5rem'}}>{'ШП 22'}</span>}>
                        <TreeItem nodeId="1241" label={<span style={{fontSize:'1.5rem'}}>{'КП'}</span>}/>
                        <TreeItem nodeId="1242" label={<span style={{fontSize:'1.5rem'}}>{'Данные'}</span>}/>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
        </TreeView>
    )
}