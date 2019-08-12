import { Component, ElementRef, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export class MyAddress {
  constructor(public postNo: string, public addressContent: string) {
  }
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: AddressComponent}]
})
export class AddressComponent implements OnInit, ControlValueAccessor, MatFormFieldControl<MyAddress> {

  static nextId = 0;
  parts: FormGroup;


  id = `address-input-${AddressComponent.nextId++}`;
  stateChanges = new Subject<void>();
  readonly autofilled: boolean;
  readonly controlType: string;


  readonly errorState: boolean;
  focused = false;
  onChange = (_: any) => {};
  onTouched = () => {
  };


  get empty() {
    const {value: {postNo, addressContent}} = this.parts;
    return !postNo && !addressContent;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(val: boolean) {
    this._required = coerceBooleanProperty(val);
    this.stateChanges.next();
  }

  private _required: boolean;


  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(val: boolean) {
    this._disabled = coerceBooleanProperty(val);
    this._disabled ? this.parts.disable() : this.parts.enable();
  }

  private _disabled = false;


  @Input()
  get value(): MyAddress | null {
    const {value: {postNo, addressContent}} = this.parts;
    if (postNo.length >= 3 && addressContent > 0) {
      return new MyAddress(postNo, addressContent);
    }
    return null;
  }

  set value(addr: MyAddress | null) {
    const {postNo, addressContent} = addr || new MyAddress('', '');
    this.parts.setValue({postNo, addressContent});
    this.stateChanges.next();
  }

  // value: MyAddress | null;

  constructor(formBuilder: FormBuilder,
              private _focusMonitor: FocusMonitor,
              private _elementRef: ElementRef<HTMLElement>,
              @Optional() @Self() public ngControl: NgControl
  ) {
    this.parts = formBuilder.group({
        postNo: '',
        addressContent: ''
      }
    );

    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      console.log(origin);
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      console.log('focused', this.focused);
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }


  ngOnInit() {
  }

  onContainerClick(event: MouseEvent): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDescribedByIds(ids: string[]): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(addr: MyAddress | null): void {
    this.value = addr;
  }

  _handleInput(): void {
    this.onChange(this.parts.value);
  }

}
