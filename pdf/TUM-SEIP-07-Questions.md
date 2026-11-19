
AF-08.2: Communication Architectures
====================================

-  BLOOM: 2: Understand
-  TYPE:  Statement Verification
-  KIND:  multiple-choice

Which of the following statements about the Communication Architectures Stream and Datagram are
true? Select all that apply.

- [ ] A Stream communicates messages as an ordered sequence of packets, but usually without any
      retries.
- [ ] A Datagram allows a simple, low-overhead communication, as messages are sent as an
      unordered set of single packets.
- [ ] A Datagram usually comes with network congestion control, which throttles the source if
      intermediate nodes are overloaded.
- [ ] Before Datagrams can be sent, no communication has to be established through a handshake.
- [ ] A Stream can provide delivery guarantees like at-most-once, exactly-once, or at-least-once.

AF-09.1: Data Structure Architectures
=====================================

-  BLOOM: 1: Remember
-  TYPE:  Characteristics / Properties
-  KIND:  free answer

A customer requires that the earlier states of its data remain accessible after each
modification. Name three Data Evolution Approaches which fulfill this requirement and briefly
characterize each of them.

AF-09.2: Data Persistence Architectures
=======================================

-  BLOOM: 2: Understand
-  TYPE:  Classification
-  KIND:  single-choice

The nodes of a distributed data store form a Leader-Follower setup, coordinated through the RAFT
consensus protocol. Only the Leader writes the data, and the nodes do not share any storage among
each other. Which Data Access approach does this setup represent?

- [ ] Shared Read / Exclusive Write
- [ ] Shared Nothing
- [ ] Shared Read/Write
- [ ] Optimistic Locking

AF-10.1: Application Reference Architecture
===========================================

-  BLOOM: 2: Understand
-  TYPE:  Characteristics / Properties
-  KIND:  free answer

Apart from the Data Flow, which other primary flows pass through the layers of an application?
For each of them, state the direction(s) in which it runs and give the reason for it.

AF-10.2: Client-Server Architecture
===================================

-  BLOOM: 2: Understand
-  TYPE:  Advantage / Drawback
-  KIND:  free answer

For both the Thin-Client and the Rich-Client Architecture, name one benefit and one drawback, and
give a reason for each of them.

AF-10.3: Information System Architecture
========================================

-  BLOOM: 2: Understand
-  TYPE:  Purpose
-  KIND:  single-choice

In the reference architecture of an Information System, which component is inserted between the N
Interaction Components and the M Service Components in order to decouple them from each other?

- [ ] Data Facade (DF)
- [ ] Plugin Facade (PF)
- [ ] Service Facade (SF)
- [ ] Utility Component (UC)
