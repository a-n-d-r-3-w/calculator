# Combined RFA Specification

## Requirements Analysis ##

### Motivation ###

The goal of this project is to demonstrate my ability to create a product using web technologies in a 
limited time frame.

### Use Case ###

####Description of User:####

Bob manages the family budget. However, he left his smartphone, tablet, and physical calculator at home.
He has only Chrome on a Windows 7 machine. He don't know about Windows' built-in calculator 
or MATLAB.

#### User Goal or Purpose of Their Activity: ####

Bob wants to figure out what his monthly income and expenses are.

### Assumptions ###
- The user wants to perform only arithmetic
- The user does not know about scientific notation
- The user will never work with numbers with an absolute value greater than 999,999,999,999
- The user doesn't care if the calculator doesn't work on browsers other than the latest version of Chrome.
- The user's monitor's resolution is at least 1280px x 1024 px

### Requirements Description ###

#### Requirements ####

##### Required Capabilities #####

1. The user can add two numbers
1. The user can subtract two numbers
1. The user can multiply two numbers
1. The user can divide two numbers
1. The user can use the calculator on the latest version of Chrome on Windows 7
1. The user can start a new calculation
1. The user can chain operations
1. When the user produces a result with an absolute value greater than 999,999,999,999, then an error is displayed

##### Non-Functional Requirements #####

1. The implementation is based on Dojo Toolkit
1. The tests are written using QUnit
1. The UI is visually pleasing

##### Non-Requirements #####

1. The user can use the calculator on a browser other than the latest version of Chrome
1. The user can use the calculator on an operating system other than Windows 7
1. The user can perform operations beyond arithmetic
1. The user can store a value in memory for later use

## Functional Design ##

### Functional Design Description ###
#### Overview ####

The product is a GUI shown in a web browser. No user-facing API is included.

#### Main Functional Design Description ####

##### GUI Design Description #####

###### Mockup ######
![Mockup](https://dl.dropboxusercontent.com/u/1085829/calculator/calculatorMockUp.png "Mockup")

###### Design considerations ######
The intent is for users to interact with the calculator primarily from 
left to right.

Each set of buttons serves a different purpose. For example, the set of buttons related to entering operands is 
separated from the set of buttons related to entering an operator.

The top row of digits buttons consists of 1-2-3 instead of 7-8-9 because
[this article](http://abcnews.go.com/Technology/story?id=119296&page=1) says that a Bell Labs study
concluded that a layout "with 1-2-3 in the top row was the easiest for people to master."

##### Other design considerations #####
- Distinct elements for operands and operators
- Color themes
- Robust to window resizing
- Buttons should be highlighted upon mouseover

##### Design Cases #####
[Describe the proposed workflow(s) through your design solution.  The description should exercise your design, much like a demo.  The proposed workflow should address the requirements and remove pain points.

Goals of the proposed workflow.
* Communicate example usage
* Validate the product design
* Provide information to guide the documentation design
* Provide information to guide the test strategy
* Document whether or not any pain points still exist
* Document which pain points are addressed in each design case

'''Note:''' The task contained in the use cases should be illustrated in the proposed workflows.  The workflows would have the same goals as the use cases, but demonstrate the steps the user would take to accomplish those tasks.]

[http://sharepoint/dev/ltc/standards/prism/Published%20Standards/MATLAB%20User%20Programming%20Competency%20Model.pdf PRISM User Types]:  [''Select one: Newcomer, Casual User, Power User, Developer'']

#### Functional Design Flags -- Caveats/Limitations ####
##### Out of Model Elements #####
[Identify aspects of the functional design in which you have decided to deviate from generally accepted MathWorks' [http://sharepoint/dev/usability/design/styleguide/default.aspx best practices] for interface design and provide justification for your deviation.]

##### Caveats/Limitations #####
[Detail any limitations or error conditions that need to be considered.
* '''Error Conditions''' - Any specification for a feature that issues errors should provide details of those errors including the following:
** What conditions lead to the error
** Proposed error message or text
* '''Limitations'''
** What behaviors the users can't do
** Why they can't do it]

### Special Considerations ###
[This section calls out particular aspects of the functional design that we are asking teams to document at a more detailed level of description.  These areas are being highlighted because they represent areas that many teams across development need to improve their skill at documenting.]

#### Compatibility ####
##### Backward Compatibility #####
[Describe the approach for a reasonable, straightforward, and low-cost upgrade using the [http://sharepoint/dev/releases/Pages/ReleaseCompatibility.aspx Release Compatibility process]: (link to your release document, if appropriate)

* What incompatibilities have been introduced?
* What tools and documentation facilitate the customer migration?
* What is the risk and mitigation strategy to prevent future incompatibilities?]

##### Forward Compatibility #####
[What is the expectation for the new capability to work in a previous release?  How will the feature behave if used in a release prior to the one in which it was created/saved?

How will this be handled by tools and documentation (e.g., save as previous release)?]

#### Testability ####
[Testability is the degree to which software or a component can be tested efficiently and completely. Testability is a way of ensuring quality. Just like quality cannot be added in a product as a separate ingredient, testability follows the same trend. It has to be gradually built into the product over time

Initiate the discussion “How are we going to test this software?” and provide necessary input to the software test procedure document. Ensure that the all the use-cases/workflows described in the R-Spec can be tested.

- model tests
- view tests
- code quality
  - JSLint
  - valid HTML
  - code coverage

##### GUI Testability #####

If the final artifact involves creating a GUI, ensure that it is designed to be accessible and 'useable' by the automated test infrastructure. Review the GUI [http://inside-files/dev/tools/tia/teststandards/GuiTesting.shtml testing guidelines].

##### API Testability #####
Ensure that various software components that are visible and accessible to the customer can be tested. Additionally, ensure that design provides the flexibility to allow unit/component level testing.

References: For further references please follow the [http://inside.mathworks.com/wiki/Software_Testability_Resources link].

#### Known Edge Cases ####
[Describe any situations where the user has a valid, although uncommon use case.

For example:
* Cancel Behavior
* Ill-conditioned input
* Singleton dimensions
* NaN, Inf behavior
* Missing data
* Large scale data
* Empty case]

### Alternate Functional Designs Considered ###
[Provide a list of alternate functional designs considered and why they were rejected.

Reasons why you may have an alternate design include:
* Changed requirements
* Design review  feedback is incorporated
* Cost/benefit analysis
* Schedule constraints

You may also want to consider whether or not any of these ideas are [http://sharepoint/fs/legal/patents/default.aspx patentable].  Even if you did not implement them, you may have come up with a novel design idea worth capturing.]

## Architectural Design ##

### Architectural Design Description ###
[Provide a link to an existing MathWorks architectural design document if this project leverages a documented design.  Otherwise, this template is for designing new (or undocumented) architecture.  If this project enhances existing architecture, use the template to describe the delta.]

[Describe the architecture details in the sections below.  In those sections  include or link to relevant architecture diagrams, examples include:
* Class diagrams
* Object diagrams
* Sequence diagrams
* Flow charts
* Call graphs
* State charts
* Doxygen
* Other]

#### Overview ####
[Give a brief overview of the design]

The architectural design cosiderations include testability and extensibility.

#### Distribution ####

#### Component/Module Design ####

#### Interface Design ####

#### Class Design ####

#### Algorithms ####

#### Data Structures ####

#### Use of existing components and libraries ####

#### Implementation language(s) selected ####

#### File and system organization ####

### Architectural Design Special Considerations ###

#### Testability ####

#### Third Party Dependencies ####
[Is there any third-party software used in the architecture?  If so, describe any licensing or distribution issues.]

#### Internal Product Dependencies ####

#### I18N ####
Consider [http://inside.mathworks.com/wiki/I18n_Guideline#Architectural_Design|I18n Guidelines for Architectural_Design]

#### Scalability and Performance ####

#### Deprecated Functionality ####

### Alternate Architectural Designs Considered ###
[Provide a list of alternate architectural designs considered and why they were rejected (e.g. cost/benefit analysis).]

## Open Issues ##
* [List any notable risks, constraints, assumptions, etc.]
