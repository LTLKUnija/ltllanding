import lt from "@/locales/lt";
import en from "@/locales/en";
import { useRouter } from "next/router";
import styles from "@/styles/priceList.module.scss";

export default function PriceListPrivate() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;
  return (
    <>
      <div className={styles.priceWrapper}>
        <h3 className={styles.priceHeader}>
          {t.priceList.innerLinkBlock.private}
        </h3>
        <ul className={styles.priceList}>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.accounts}:
            </div>
            <div className={styles.priceDescription}></div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.dataVerification}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.openingAccount}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.currentAccountAdministration}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.cashBalance}
            </div>
            <div className={styles.priceDescription}>
              <span>0 %/ 360 d</span>
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.closingAccount}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.accountStatmentCollectionAtBranch}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.currentPreviousMonth}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.currentPreviousMonth}
            </div>
            <div className={styles.priceDescription}>3 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.forEachPreviousYear}
            </div>
            <div className={styles.priceDescription}>3 EUR</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.onlineStatmentofAccount}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.restrictedAccountService}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.administration}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.transferingFunds}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.creditsTransfers}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.creditsTransfers}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li
            className={[styles.priceItem, styles.priceTitle, styles.box].join(
              " "
            )}
          >
            <div className={styles.definition}>
              {t.priceList.table.restrictedPayment}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.transferingMoney}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.freeToRecipient}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.paymentsInEuro}
            </div>
            <div className={styles.priceDescription}>1 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.compulsoryDecommitment}
            </div>
            <div className={styles.priceDescription}>2 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.paymentCancellation}
            </div>
            <div className={styles.priceDescription}>10 €</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.internationnalMoney}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.paymentsOutside}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.serviceNotAvailable}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.transferOnline}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.outgoingPayments}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.betweenAccounts}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.paymentsInEuro}
            </div>
            <div className={styles.priceDescription}>0.50 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.compulsoryDecommitment}
            </div>
            <div className={styles.priceDescription}>2 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.cancelationOfPayment}
            </div>
            <div className={styles.priceDescription}>10 €</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.outgoingPayments}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.betweenAccounts}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.paymentsInEuro}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.freeOfCharge}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.returningPayment}
            </div>
            <div className={styles.priceDescription}>10 €</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.internationalMonetTransfer}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.paymentsOutside}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.serviceNotAvailable}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.cashTransaction}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.cashDepositYourAccount}
            </div>
            <div className={styles.priceDescription}>
              0,50% {t.priceList.table.amountDeposited}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.cashDepositOnotherAccount}
            </div>
            <div className={styles.priceDescription}>
              1,00% {t.priceList.table.amountDeposited}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.cashPayment}
            </div>
            <div className={styles.priceDescription}>
              2,00% {t.priceList.table.onTheAmount}
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
              <div>{t.priceList.table.taxDoesNotApply}</div>
              <div>{t.priceList.table.withInterestPayments}</div>
              <div>{t.priceList.table.repayingShareContribution}</div>
              <div>{t.priceList.table.clientsSalaryTransferred}</div>
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.penaltyForFailingToCollectFunds}
            </div>
            <div className={styles.priceDescription}>
              2,00% {t.priceList.table.onAmountOfCashOrdered}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.feesForCreditServices}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.minimumAnnualInterestRate}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.accordingToTermsOFCreditAgreement}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.creditAgreementConclusionFee}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.ofTheLoanAmount} 350€
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.changingTermsOfCredit}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.existingCreditBalance} 200€ *
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.caseProvidetForInLaw}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.changingTermsOfCreditAgreemntInCaseOfConsumer}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.existingCreditBalance} 100 €
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.commitmentFee}
            </div>
            <div className={styles.priceDescription}>
              0.50% {t.priceList.table.unusedAmountOfCredit}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.lateFees}
            </div>
            <div className={styles.priceDescription}>
              0.50% {t.priceList.table.amountOverdueForEachDay}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.loanAdministrationFee}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.notApplicable}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.creditdisbursementFee}
            </div>
            <div className={styles.priceDescription}>
              20 € {t.priceList.table.forEachPartialDrawdown}
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
              {t.priceList.table.taxWaivedFullAmountDisbursed}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.ChangingDueDateInstalments}
            </div>
            <div className={styles.priceDescription}>20 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.changeForEarlyRepayment}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.loansPersonalNeeds}
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
              {t.priceList.table.loansPurposeSubject}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.feeOnCreditRepayable}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.notApplicable}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.feeForGrantingConsentToASecondCharge}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.onDaysVariableInterestRate}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.deregistrationOfAMortgage}
            </div>
            <div className={styles.priceDescription}>80 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.valuationOfAssets}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.basedOnIndependentValueFee}
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
              {t.priceList.table.inCaseOfCreditUnionCommissioning}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.internalValuationFee}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.perPropertyComplex}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.certificateFromCentralDataBnak}
            </div>
            <div className={styles.priceDescription}>30 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.sendingDefaultNotice}
            </div>
            <div className={styles.priceDescription}>10 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.sendingRepeatedNotification}
            </div>
            <div className={styles.priceDescription}>30 €</div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.preparationCertificateInLithuanian}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.certificatesRelaitingCreditAgreement}
            </div>
            <div className={styles.priceDescription}>150 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.otherAgreementsRelatedContract}
            </div>
            <div className={styles.priceDescription}>100 €</div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.issuingCertificatesForeignLanguage}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.serviceNotAvailable}
            </div>
          </li>
          <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
            <div className={styles.priceTitle}>
              {t.priceList.table.fees.otherServices}
            </div>
          </li>
          <li className={styles.priceItem}>
            <div className={styles.priceDescriptionLeft}>
              {t.priceList.table.sendingDocumentsByCurier}
            </div>
            <div className={styles.priceDescription}>
              {t.priceList.table.fees.actualCost}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
