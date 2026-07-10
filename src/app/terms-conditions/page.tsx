"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";

export default function TermsAndConditionsPage() {
  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main data-section-theme="dark" className="min-h-screen bg-[#0A0A0A] text-zinc-350 pt-32 pb-24 px-6 sm:px-12 lg:px-24 font-sans">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-white mb-4">
              TERMS & <span className="text-[#E76B24]">CONDITIONS</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base">
              Last updated: May 01, 2025
            </p>
            <p className="text-zinc-300 text-base sm:text-lg mt-4 italic">
              Please read these terms and conditions carefully before using Our Service.
            </p>
          </div>

          {/* Interpretation and Definitions */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal text-white border-b border-white/10 pb-3">
              Interpretation and <span className="text-[#E76B24]">Definitions</span>
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-normal text-white">
                Interpretation
              </h3>
              <p className="leading-relaxed">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-normal text-white">
                Definitions
              </h3>
              <p className="leading-relaxed">
                For the purposes of these Terms and Conditions:
              </p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed text-zinc-300">
                <li>
                  <strong className="text-white font-normal">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li>
                  <strong className="text-white font-normal">Country</strong> refers to: Delhi, India
                </li>
                <li>
                  <strong className="text-white font-normal">Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Agreement) refers to Zee Institute of Creative Art (ZICA).
                </li>
                <li>
                  <strong className="text-white font-normal">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                </li>
                <li>
                  <strong className="text-white font-normal">Service</strong> refers to the Website.
                </li>
                <li>
                  <strong className="text-white font-normal">Terms and Conditions</strong> (also referred as &ldquo;Terms&rdquo;) mean these Terms and <span className="text-[#E76B24]">Conditions</span> that form the entire agreement between You and the Company regarding the use of the Service.
                </li>
                <li>
                  <strong className="text-white font-normal">Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                </li>
                <li>
                  <strong className="text-white font-normal">Website</strong> refers to Zee Institute of Creative Art (ZICA), accessible from <a href="https://zicapitampura.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white underline transition-colors">https://zicapitampura.com</a>
                </li>
                <li>
                  <strong className="text-white font-normal">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#E76B24]">
              Acknowledgment
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p>
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              <p>
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a> of the Company. Our <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a> describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a> carefully before using Our Service.
              </p>
            </div>
          </section>

          {/* Links to Other Websites */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Links to Other <span className="text-[#E76B24]">Websites</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              <p>
                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Termination
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p>
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Limitation of <span className="text-[#E76B24]">Liability</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&rsquo;t purchased anything through the Service.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p>
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&rsquo;s liability will be limited to the greatest extent permitted by law.
              </p>
            </div>
          </section>

          {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              <span className="text-[#E76B24]">&ldquo;AS IS&rdquo;</span> and <span className="text-[#E76B24]">&ldquo;AS AVAILABLE&rdquo;</span> Disclaimer
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The Service is provided to You &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              <p>
                Without limiting the foregoing, neither the Company nor any of the company&rsquo;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Governing <span className="text-[#E76B24]">Law</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </div>
          </section>

          {/* Disputes Resolution */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Disputes <span className="text-[#E76B24]">Resolution</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </div>
          </section>

          {/* Severability and Waiver */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Severability and <span className="text-[#E76B24]">Waiver</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-normal text-white">
                Severability
              </h3>
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>
            <div className="space-y-4 pt-4 leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-normal text-white">
                Waiver
              </h3>
              <p>
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party&rsquo;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>
          </section>

          {/* Changes to These Terms and Conditions */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Changes to These <span className="text-[#E76B24]">Terms and Conditions</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&rsquo; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p>
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 className="text-2xl sm:text-3xl font-normal text-white">
              Contact <span className="text-[#E76B24]">Us</span>
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                <li>By phone number: <a href="tel:+917900400300" className="text-white hover:underline">+91 79004 00300</a></li>
                <li>By email: <a href="mailto:info@Pitampura.com" className="text-white hover:underline">info@Pitampura.com</a></li>
              </ul>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
