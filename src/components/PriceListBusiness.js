import styles from "@/styles/priceList.module.scss";
import { useTranslation } from "next-i18next";

export default function PriceListBusiness() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.priceWrapper}>
        <h3 className={styles.priceHeader}>
          {t("priceList.innerLinkBlock.corporate")}
        </h3>
        <ul className={styles.priceList}>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.accountsFinancialInstitutions")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.dataVerification")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.openingCurrentAccount")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.currentAccountAdministration")}
            </div>
            <div className={styles.priceDescription}>
              5 {t("priceList.table.month")}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div className={styles.definition}>
              {t("priceList.table.customerHasOneActiveCredit")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.cashBalance")}
            </div>
            <div className={styles.priceDescription}>0,0% / 360 d.</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.accountStatmentCollectionAtBranch")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.currentPreviousMonth")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.otherMonthCurrentYeasr")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.forEachPreviousYear")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.onlineStatmentofAccount")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.currentAccountClosure")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.transferMoneyCustomerService")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.outgoingPayments")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.betweenAccounts")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsInEuro")}
            </div>
            <div className={styles.priceDescription}>0.50 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.compulsoryDecommitment")}
            </div>
            <div className={styles.priceDescription}>2 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentCancellation")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.incomingPayments")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.betweenAccounts")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsInEuro")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.returningPayment")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.feeForCompanies")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.accountsFinancialCompanies")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.feeForDataVerification")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.from")} 500 EUR
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.openingCurrentAccount")}
            </div>
            <div className={styles.priceDescription}>250 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.fundsCustodyAccounts")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div
              className={[styles.definition, styles.definitionFlex].join(" ")}
            >
              {t("priceList.table.custodyAccountMayOpenedIf")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.currentAccountAdministration")}
            </div>
            <div className={styles.priceDescription}>25 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.managmentCustodyAccount")}
            </div>
            <div className={styles.priceDescription}>200 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.cashBalance")}
            </div>
            <div className={styles.priceDescription}>0% / 360 d.</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.accountStatmentCollectionAtBranch")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.currentPreviousMonth")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.otherMonthCurrentYeasr")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.forEachPreviousYear")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.onlineStatmentofAccount")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.currentAccountClosure")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.custodyAccountClosure")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.moneyTransferForFinancialInstitution")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.toRecipientsAccountCreditUnion")}
            </div>
            <div className={styles.priceDescription}>2 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsInEuro")}
            </div>
            <div className={styles.priceDescription}>2 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.compulsoryDecommitment")}
            </div>
            <div className={styles.priceDescription}>2 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentCancellation")}
            </div>
            <div className={styles.priceDescription}>2 EUR</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.onlineyMOneyTransferToFinancialInstitutions")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.outgoingPayments")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.betweenAccounts")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsInEuro")}
            </div>
            <div className={styles.priceDescription}>0,50 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.compulsoryDecommitment")}
            </div>
            <div className={styles.priceDescription}>3 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentCancellation")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.incomingPayments")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.betweenAccounts")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.freeOfCharge")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsInEuro")}
            </div>
            <div className={styles.priceDescription}>0,25 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.returningPayment")}
            </div>
            <div className={styles.priceDescription}>25 EUR</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.internationalMoneyTransferAtCustomerService")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsOutside")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.serviceNotAvailable")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.internationalMoneyTranser")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.paymentsOutside")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.serviceNotAvailable")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.cashTransactionToAllLegalEntities")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.cashDepositYourAccount")}
            </div>
            <div className={styles.priceDescription}>
              0.50% {t("priceList.table.ammountDeposited")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.cashDepositOnotherAccount")}
            </div>
            <div className={styles.priceDescription}>
              1,00% {t("priceList.table.ammountDeposited")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.cashPayment")}
            </div>
            <div className={styles.priceDescription}>
              2,00% {t("priceList.table.onTheAmount")}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div
              className={[styles.definition, styles.definitionFlex].join(" ")}
            >
              <div>{t("priceList.table.taxDoesNotApply")}</div>
              <div>{t("priceList.table.withInterestPayments")}</div>
              <div>{t("priceList.table.repayingShareContribution")}</div>
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.penaltyForFailingToCollectFunds")}
            </div>
            <div className={styles.priceDescription}>
              0,50% {t("priceList.table.onAmountOfCashOrdered")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.feesForCreditServices")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.creditInterestRate")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.accordingToTermsOFCreditAgreement")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.creditAgreementConclusionFee")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.ofTheLoanAmount")} 400 EUR
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.changingTermsOfCredit")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.existingCreditBalance")} 300 EUR
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.transferingLoanAgreementOfAnotherPerson")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.amountOfExistingCreditBalance")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.commitmentFee")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.unusedCreditAmount")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.lateFees")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.forEachDayOverdue")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.loanAdministrationFee")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.notApplicable")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.creditdisbursementFee")}
            </div>
            <div className={styles.priceDescription}>
              20 EUR {t("priceList.table.forEachPartialDrawdown")}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div
              className={[styles.definition, styles.definitionFlex].join(" ")}
            >
              <div>{t("priceList.table.taxWaivedFullAmountDisbursed")}</div>
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.ChangingDueDateInstalments")}
            </div>
            <div className={styles.priceDescription}>20 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.changeForEarlyRepayment")}
            </div>
            <div className={styles.priceDescription}>
              2% {t("priceList.table.creditAgreementSpecified")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.feeForGrantingConsentToSecondCharge")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.ofTheCreditBalance")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.deregistrationOfAMortgage")}
            </div>
            <div className={styles.priceDescription}>50 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.valuationOfAssets")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.basedOnIndependentValueFee")}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div
              className={[styles.definition, styles.definitionFlex].join(" ")}
            >
              <div>{t("priceList.table.inCaseOfCreditUnionCommissioning")}</div>
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.internalValuationFee")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.perPropertyComplex")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.creditProjectAnalysis")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fromAmountRequestedByClient")}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div
              className={[styles.definition, styles.definitionFlex].join(" ")}
            >
              <div>{t("priceList.table.caseOfLoanToACliant")}</div>
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.certificateFromCentralDataBnak")}
            </div>
            <div className={styles.priceDescription}>30 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.sendingDefaultNotice")}
            </div>
            <div className={styles.priceDescription}>10 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.sendingRepeatedNotification")}
            </div>
            <div className={styles.priceDescription}>30 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.certificatesRelaitingCreditAgreement")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.unlessOtherwiseSpecified")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.otherAgreementsRelatedContract")}
            </div>
            <div className={styles.priceDescription}>100 EUR</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.provisionOfGuarantee")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.ofTheGuaranteedAmount")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.guaranteeFromUnion")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.administrationClaimForPayment")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.amountMin")}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t("priceList.table.fees.otherServices")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.sendingDocumentsByCurier")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.actualCost")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.copiesOfDocuments")}
            </div>
            <div className={styles.priceDescription}>
              {t("priceList.table.fees.from")} 1 EUR
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.documentsFromArchive")}
            </div>
            <div className={styles.priceDescription}>
              50 EUR + {t("priceList.table.actualCostForArchiesServices")}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t("priceList.table.translationOfCertificates")}
            </div>
            <div className={styles.priceDescription}>
              50 EUR + {t("priceList.table.actualCostTranslationServices")}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
