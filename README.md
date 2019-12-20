# rn-count-down
A React Native component which can show time count down starting from current time.

![](countdown.gif)

## Usage

```jsx
    <Countdown
      label="Time:"
      endTime="2019-12-19T17:32+07:00"
      onTimeIsUp={() => { console.log('Time is up!'); }}
    />
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------
 containerStyle        | Style of component's container                    | object   | no       |  `{}`         
 endTime       | End time value in date type                 | string  | yes          |           
 label        | Text show beside time      | string | no       | `''`          
 onTimeIsUp           | Callback called when time is up                          | function  | yes          |           
 textStyle         | Style of time value text                       | object  | no          | `{}`                
 

```


```
