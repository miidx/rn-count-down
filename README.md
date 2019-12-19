# Countdown
A React Native component which can show time count down starting from current time


## Usage

```jsx
    <Countdown
      label="Time:"
      endTime={this.props.endTime}
      onTimeIsUp={() => { onTimeIsUp(); }}
      textStyle={styles.text}
      containerStyle={styles.container}
    />
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------
 containerStyle        | Style of component's container                    | object   | no       |  `{}`         
 endTime       | End time value                 | string  | yes          |           
 label        | Text show beside time      | string | no       | `''`          
 onTimeIsUp           | Callback called when time is up                          | function  | yes          |           
 textStyle         | Style of time value text                       | object  | no          | `{}`                
 

```


```


## Note:
* The `endTime` props value should be in date type, for example: `2019-12-19T17:32:09.4753717+07:00
`