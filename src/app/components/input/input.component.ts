import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string | undefined;
  @Input() type: string = 'text';
  value: any = '';
  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() {}

  writeValue(value: any) {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {}

  handleChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouch(this.value);
  }
}
