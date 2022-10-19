import { ComponentClassName } from '@aws-amplify/ui';

type ComponentNameKey =
  | 'Alert'
  | 'Badge'
  | 'Button'
  | 'Button'
  | 'Card'
  | 'Checkbox'
  | 'CheckboxField'
  | 'Collection'
  | 'PhoneNumberField'
  | 'Divider'
  | 'Expander'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'Icon'
  | 'Image'
  | 'Link'
  | 'Loader'
  | 'Menu'
  | 'Pagination'
  | 'PasswordField'
  | 'PhoneNumberField'
  | 'Placeholder'
  | 'Radio'
  | 'RadioGroupField'
  | 'Rating'
  | 'ScrollView'
  | 'SearchField'
  | 'Select'
  | 'SliderField'
  | 'SelectField'
  | 'StepperField'
  | 'SwitchField'
  | 'Table'
  | 'Tabs'
  | 'Text'
  | 'TextAreaField'
  | 'TextField'
  | 'ToggleButton'
  | 'ToggleButtonGroup'
  | 'VisuallyHidden';

type ComponentClassNameKey =
  | 'Alert'
  | 'AlertIcon'
  | 'AlertHeading'
  | 'AlertBody'
  | 'AlertDismiss'
  | 'Badge'
  | 'Button'
  | 'ButtonGroup'
  | 'ButtonLoaderWrapper'
  | 'Card'
  | 'Checkbox'
  | 'CheckboxButton'
  | 'CheckboxIcon'
  | 'CheckboxInput'
  | 'CheckboxLabel'
  | 'CheckboxField'
  | 'Collection'
  | 'CollectionItems'
  | 'CollectionSearch'
  | 'CollectionPagination'
  | 'CountryCodeSelect'
  | 'DialCodeSelect'
  | 'Divider'
  | 'DividerLabel'
  | 'Expander'
  | 'ExpanderContent'
  | 'ExpanderContentText'
  | 'ExpanderHeader'
  | 'ExpanderIcon'
  | 'ExpanderItem'
  | 'ExpanderTrigger'
  | 'Field'
  | 'FieldDescription'
  | 'FieldErrorMessage'
  | 'FieldGroup'
  | 'FieldGroupControl'
  | 'FieldGroupOuterEnd'
  | 'FieldGroupOuterStart'
  | 'FieldGroupInnerEnd'
  | 'FieldGroupInnerStart'
  | 'FieldGroupIcon'
  | 'FieldGroupIconButton'
  | 'FieldGroupHasInnerEnd'
  | 'FieldGroupHasInnerStart'
  | 'FieldShowPassword'
  | 'FieldGroupFieldWrapper'
  | 'Flex'
  | 'Grid'
  | 'Heading'
  | 'Icon'
  | 'Image'
  | 'Input'
  | 'Label'
  | 'Link'
  | 'Loader'
  | 'LoaderDeterminate'
  | 'LoaderPercentageText'
  | 'MenuContent'
  | 'MenuContentWrapper'
  | 'MenuItem'
  | 'MenuTrigger'
  | 'Pagination'
  | 'PaginationItemButton'
  | 'PaginationItemCurrent'
  | 'PaginationItemEllipsis'
  | 'PasswordField'
  | 'PhoneNumberField'
  | 'Placeholder'
  | 'Radio'
  | 'RadioButton'
  | 'RadioInput'
  | 'RadioLabel'
  | 'RadioGroupField'
  | 'RadioGroup'
  | 'Rating'
  | 'ScrollView'
  | 'SearchField'
  | 'SearchFieldClear'
  | 'SearchFieldSearch'
  | 'Select'
  | 'SelectField'
  | 'SelectWrapper'
  | 'SelectIconWrapper'
  | 'SliderField'
  | 'SliderFieldGroup'
  | 'SliderFieldLabel'
  | 'SliderFieldRange'
  | 'SliderFieldRoot'
  | 'SliderFieldThumb'
  | 'SliderFieldTrack'
  | 'StepperField'
  | 'StepperFieldButtonDecrease'
  | 'StepperFieldButtonIncrease'
  | 'StepperFieldInput'
  | 'SwitchField'
  | 'SwitchLabel'
  | 'SwitchThumb'
  | 'SwitchTrack'
  | 'SwitchWrapper'
  | 'Table'
  | 'TableCaption'
  | 'TableBody'
  | 'TableTd'
  | 'TableTh'
  | 'TableFoot'
  | 'TableHead'
  | 'TableRow'
  | 'Tabs'
  | 'TabItems'
  | 'Text'
  | 'Textarea'
  | 'TextAreaField'
  | 'TextField'
  | 'ToggleButton'
  | 'ToggleButtonGroup'
  | 'VisuallyHidden';

interface ComponentClassNameMetadata {
  className: ComponentClassName;
  components?: ComponentNameKey[];
  description?: string;
}

export type ComponentClassNameItems = {
  [Name in ComponentClassNameKey]: ComponentClassNameMetadata;
};

export type ComponentClassNames = {
  [Name in ComponentClassNameKey]: ComponentClassNameMetadata['className'];
};
