/**
 * @oas [post] /store/customers
 * operationId: PostCustomers
 * summary: Create Customer
 * description: Create a customer.
 * x-authenticated: false
 * parameters: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: curl -X POST '{backend_url}/store/customers'
 * tags:
 *   - Customers
 * responses:
 *   "200":
 *     description: OK
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * 
*/

