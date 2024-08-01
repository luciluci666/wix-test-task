export enum WixClientError {
  SUCCESS = 'Success',
  BAD_REQUEST = 'Invalid input (e.g., when the filter format is not valid or when providing invalid options when calling productOptionsAvailability)',
  NOT_AUTHORIZED = 'Invalid authorization token, or Wix stores is not installed',
  NOT_FOUND = 'Requested product or collection is not found',
  INTERNAL_SERVER_ERROR = 'Unexpected error',
}
