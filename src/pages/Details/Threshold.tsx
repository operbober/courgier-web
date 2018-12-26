import * as React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    List,
    ListItem,
    IconButton,
    Switch,
} from '@material-ui/core';
import {Delete as DeleteIcon} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme: any): any => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    textField: {
        margin: 0,
        width: 200,
    },
    select: {
        textAlign: 'center',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class ThresholdComponent extends React.Component<any, any> {


    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            level: 'INFO',
            condition: 'eq',
            value: 0
        }
    }

    public handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    public handleSelectChange = (event: any) => {
        this.setState({[event.target.name]: event.target.value});
    };

    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <h3>Threshold Values</h3>

                <List dense={true}>
                    <ListItem>
                        <Switch defaultChecked={true} value="checkedF" color="default" />
                        <span style={{marginLeft: 10}}>Send</span><strong style={{marginLeft: 10}}>Warn</strong><span style={{marginLeft: 10}}>notification if value</span><strong style={{marginLeft: 10}}>{'< 30'}</strong>
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                    <ListItem>
                        <Switch defaultChecked={false} value="checkedF" color="default" />
                        <span style={{marginLeft: 10}}>Send</span><strong style={{marginLeft: 10}}>Fatal</strong><span style={{marginLeft: 10}}>notification if value</span><strong style={{marginLeft: 10}}>{'< 10'}</strong>
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                </List>

                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Level</InputLabel>
                        <Select
                            className={classes.select}
                            value={this.state.level}
                            onChange={this.handleSelectChange}
                            inputProps={{
                                name: 'level',
                            }}
                        >
                            <MenuItem value={'TRACE'}>Trace</MenuItem>
                            <MenuItem value={'DEBUG'}>Debug</MenuItem>
                            <MenuItem value={'INFO'}>Info</MenuItem>
                            <MenuItem value={'WARN'}>Warn</MenuItem>
                            <MenuItem value={'ERROR'}>Error</MenuItem>
                            <MenuItem value={'FATAL'}>Fatal</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Condition</InputLabel>
                        <Select
                            className={classes.select}
                            value={this.state.condition}
                            onChange={this.handleSelectChange}
                            inputProps={{
                                name: 'condition',
                            }}
                        >
                            <MenuItem value={'gt'}>{'>'}</MenuItem>
                            <MenuItem value={'gt_or_eq'}>{'>='}</MenuItem>
                            <MenuItem value={'lt_or_eq'}>{'<='}</MenuItem>
                            <MenuItem value={'lt'}>{'<'}</MenuItem>
                            <MenuItem value={'eq'}>{'='}</MenuItem>
                            <MenuItem value={'not_eq'}>{'!='}</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            className={classes.textField}
                            label="Value"
                            type="number"
                            inputProps={{name: 'value'}}
                            value={this.state.value}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" color="primary">Add</Button>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export const Threshold = withStyles(styles)(ThresholdComponent);