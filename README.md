# rn-count-down
A React Native component which can show time count down starting from current time.

![](countdown.gif)

## Installation

```
  npm i @miidx/rn-count-down
```

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
 endTime       | End time value in complete ISO-8601 date time format `YYYY-MM-DDTHH:mmZ`. `YYYY` is 4 digit year, `MM` is month number, `DD` is day of month, `HH` is hours in 24 hour time, `mm` is minutes, and `Z` is offset from UTC time, such as `+-HH:mm`. Adding seconds `s` and fractional seconds `SS` are optional                 | string  | yes          |           
 label        | Text shown beside time count down      | string | no       | `''`          
 onTimeIsUp           | Callback called when time is up                          | function  | yes          |           
 textStyle         | Style of time value text                       | object  | no          | `{}`                
 

```


```
