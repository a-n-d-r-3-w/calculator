# Combined RFA Specification

## Requirements Analysis ##

### Motivation ###
* Users want a calculator that is accessible from a web browser
* The calculator must support arithmetic (addition, subtraction, multiplication, division)
* The calculator must support decimal points and positive and negative numbers
* The calculator must be implemented using the Dojo Toolkit

### Use Cases ###

''For more information, see [[RFAIN: Requirements Analysis: Create Use Cases|Create Use Cases]]''

[''Optional: Add a link to the User Roles and Goals worksheet for this project.'']

#### Use Case 1: Casual User ####

#####Description of User:#####

This user is figuring out the family budget and wants to do some simple calculations. However, they left their smartphone, tablet, and physical calculator at home. All they have is Chrome on their Windows 7 machine. They don't know about Windows' built-in calculator or MATLAB, either.

##### User Goal or Purpose of Their Activity: #####

This user wants to add, subtract, multiply, and divide some big numbers.

##### Current workflow: #####

1. [''Describe the first step of the workflow including any user pain. Indicate pain points in parentheses.'' '''(PP1) (PP2)''']
1. [''Describe the next step of the workflow including any user pain. Indicate pain points in parentheses.''  '''(PP3)''']
1. [''Describe the next step of the workflow including any user pain. Indicate pain points in parentheses.''  '''(PP4)''']

#####Source Material:#####

* '''Links to source material or explanation of sources:'''
* '''Links to related gecks:'''
* '''Relative importance of this use case or motivation for use case:'''
* '''Products and versions included in this use case:'''

#### Pain Points ####

PP1: [''Summary of first pain point'']

PP2: [''Summary of second pain point'']

PP3: [''Summary of third pain point'']

PP4: [''Summary of fourth pain point'']

### Assumptions ###
[''List assumptions about the problem, use cases, or requirements here.'']

### Requirements Description ###

#### Requirements ####

##### Required Capabilities #####

1. Addition
   1. Statement: The user can add two numbers
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have
1. Subtraction
   1. Statement: The user can subtract two numbers
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have
1. Multiplication
   1. Statement: The user can multiply two numbers
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have
1. Division
   1. Statement: The user can divide two numbers
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have
1. Chrome on Windows
   1. Statement: The user can use the calculator on the latest version of Chrome on Windows 7
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have
1. New calculation
   1. Statement: The user can start a new calculation
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have
1. Chained operations
   1. Statement: The user can chain operations
   1. Use Case Identifier and/or Rationale
   1. Priority: Must Have

##### Non-Functional Requirements (Performance, Reliability, I18N, L10N, others) #####

1. Supported browsers
   1. Statement: The user can use the calculator on a browser other than the latest version of Chrome
   1. Use Case Identifier and/or Rationale
   1. Priority: Nice to Have
1. Supported operating systems
   1. Statement: The user can use the calculator on an operating system other than Windows 7
   1. Use Case Identifier and/or Rationale
   1. Priority: Nice to Have
1. Advanced mathematical operations
   1. Statement: The user can perform operations beyond arithmetic
   1. Use Case Identifier and/or Rationale
   1. Priority (Must Have, Nice to Have)
1. Store values in memory
   1. Statement: The user can store a value in memory for later use
   1. Use Case Identifier and/or Rationale
   1. Priority (Must Have, Nice to Have)

## Functional Design ##

### Introduction ###
[Geck Numbers(s):

Link to the R document

* '''Motivation and Background'''
** This should reflect the information in the motivation section of the R document.

* '''Big picture view of the problem'''
** Describe how this design fits into the big picture.
** Does it address the entire R document or what portion and why.]

### Functional Design Description ###
#### Overview ####
[Describe the high level implementation of the solution.  Is it a block, API, GUI, tool, IDE, etc.?]

[http://sharepoint/dev/ltc/standards/prism/Published%20Standards/MATLAB%20User%20Programming%20Competency%20Model.pdf PRISM User Types]:  [''Select all applicable user types: Newcomer, Casual User, Power User, Developer'']

Consider the [http://inside.mathworks.com/wiki/I18n_Guideline#Functional_Design I18N Guidelines] for Function Design.

#### Main Functional Design Description ####
[Describe the functional design.  Document either your GUI or your API design, or both.  If it makes sense to discuss both at the same time, you can combine the GUI and API sections.  Just be sure to capture all the relevant information from both sections. Be sure to also include the why behind the design decisions you make.

Delete the unused section if appropriate.]

##### GUI Design Description #####

[Mockup](https://dl.dropboxusercontent.com/u/1085829/calculator/calculatorMockUp.png)

![Mockup](https://dl.dropboxusercontent.com/u/1085829/calculator/calculatorMockUp.png "Mockup")

Buttons will be divided into 4 sections. The intent is for users to interact with the calculator primarily from 
left to right.
1. Clear
1. Related to operands
  - Digits
  - Plus-minus sign
  - Decimal point
1. Arithmetic operators
1. Equals sign

The top row of digits buttons consists of 1-2-3 instead of 7-8-9 because
[this article](http://abcnews.go.com/Technology/story?id=119296&page=1) says that a Bell Labs study
concluded that a layout "with 1-2-3 in the top row was the easiest for people to master."


Other considerations:
- Distinct elements for operands and operators
- Color themes
- Robust to window resizing
- Buttons should be highlighted upon mouseover

##### Programmatic Information #####
[Describe the API design that will be exposed to users.

This could include:
* Function, with the draft of reference help
* Classes, with a UML class/package diagram or a list of corresponding properties and methods

Be sure to follow the MATLAB programming interface standards ([http://sharepoint/dev/ltc/standards/prism/default.aspx PRISM]); also consider [http://sharepoint/dev/ltc/standards/prism/Published%20Standards/Matching%20MATLAB%20Programming%20Interfaces%20to%20User%20Types%20and%20Skill%20Levels.pdf Matching the MATLAB programming interfaces to user types and skill levels].]

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

##### Default Parameter Values and Behaviors #####
[Describe default parameters and behaviors and when the user would change them.

Questions to consider:
* What are the default parameters' values and behaviors?
* Why would a user choose to change the default values?]

#### Interoperability ####
[Describe how the functional design fits in with existing interfaces in our key products and features seamlessly.  For example, a feature might use HG's coordinate system, work with model reference, etc.

Consider the following:
* [http://sharepoint/dev/ltc/standards/prism/default.aspx PRISM]
* Third-party products
* Other hardware systems]

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
